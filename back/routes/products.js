const express = require("express")
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//Probamos autenticacion
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin") , newProduct) //Establecemos la ruta
router.route('/producto/:id').get(getProductById) //Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin") , updateProduct); //Creación de la ruta de actualización
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin") , deleteProduct); //Ruta para eliminar un producto

module.exports = router;