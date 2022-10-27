const producto = require("../models/prodctos")
const fetch = (url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require

//Ver la lista de productos
exports.getProducts = async (req,res,next) =>{

    const productos = await producto.find();

    if(!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        success:true,
        cantidad : productos.length,
        productos
    })
}

//Ver un producto por id
exports.getProductById = async (req, res, next) =>{

    const product = await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }

    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras informacion sobre tu producto: ",
        product
    })
}

//Update un producto
exports.updateProduct = async (req, res, next) =>{

    let product = await producto.findById(req.params.id) //variable modificable
    if(!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
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
}

//Eliminar un producto
exports.deleteProduct = async (req, res, next) =>{

    const product = await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }

    await product.remove();
    res.status(200).json({

        success:true,
        message:"Producto eliminado correctamente"
    })

}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

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