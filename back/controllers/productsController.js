const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require

//Ver la lista de productos
exports.getProducts = catchAsyncErrors(async (req,res,next) =>{

    const productos = await producto.find();

    if (!productos){
        return next(new ErrorHandler("Productos no encontrado", 404))
        }

    res.status(200).json({
        success:true,
        cantidad : productos.length,
        productos
    })
})

//Ver un producto por id
exports.getProductById= catchAsyncErrors( async (req, res, next)=>{
    const product= await producto.findById(req.params.id)

    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
        }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})

//Update un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) =>{

    let product = await producto.findById(req.params.id) //variable modificable
    if (!product){
        return next(new ErrorHandler("No se encontró el producto", 404))
        }

    product = await producto.findByIdAndUpdate(req.params.id, req.body,{

        new:true, //Asume los valores nuevos que va a registrar
        runValidators:true //Validar lo que es nuevo
    });
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
})

//Eliminar un producto
exports.deleteProduct = catchAsyncErrors(async (req, res, next) =>{

    const product = await producto.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
        }

    await product.remove();
    res.status(200).json({

        success:true,
        message:"Producto eliminado correctamente"
    })

})

//Crear nuevo producto /api/productos
exports.newProduct= catchAsyncErrors(async(req,res,next)=>{

    req.body.user=req.user.id;
    const product=await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})

//Crear o actualizar una review
exports.creteProductReview = catchAsyncErrors( async(req, res, next) =>{
    const {rating, comentario, idProducto} = req.body;

    const opinion = {
        nombreCliente: req.user.nombre,
        rating: Number(rating),
        comentario
    }

    const product = await producto.findById(idProducto);

    const isReviewed = product.opiniones.find(item =>
        item.nombreCliente === req.user.nombre)

    if(isReviewed){
        product.opiniones.forEach(opinion =>{
            if(opinion.nombreCliente === req.user.nombre){
                opinion.comentario = comentario,
                opinion.rating = rating
            }
        })
    }
    else{
        product.opiniones.push(opinion)
        product.numCalificaciones = product.opiniones.length
    }

    product.calificacion = product.opiniones.reduce ((acc, opiniones)=>
    opinion.rating + acc, 0)/product.opiniones.length

    await product.save({validateBeforeSave:false});

    res.status(200).json({
        success:true,
        message:"Hemos opinado correctamente"
    })
})

//Ver todas las reviews de un producto
exports.getProductsReviews = catchAsyncErrors( async(req, res, next) =>{
    //En req.query.id hace referencia a que en la web debe decir ?id=...
    //Si fuera idproducto, en la web seria ?idProducto=...
    const product = await producto.findById(req.query.id)

    res.status(200).json({
        success:true,
        opiniones:product.opiniones
    })
})

//Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.idProducto);

    const opiniones = product.opiniones.filter(opinion => 
        opinion._id.toString() !== req.query.idReview.toString());

        const numCalificaciones = opiniones.length;

        const calificacion = product.opiniones.reduce((acc, Opinion) =>
            Opinion.rating + acc, 0) / opiniones.length;

        await producto.findByIdAndUpdate(req.query.idProducto, {
            opiniones,
            calificacion,
            numCalificaciones
        }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            message: "review eliminada correctamente"
        })

    })

//PROBANDO FETCH
//Ver todos los productos
function verProductos(){

    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductos(); Se llama al metodo y se devuelve por consola

//Ver por id
function verProductoPorId(id){

    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductoPorId("634b2877688be57fa7ccd72c"); Se llama al metodo