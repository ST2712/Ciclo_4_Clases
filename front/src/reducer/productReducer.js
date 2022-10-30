import { ALL_PRODUCTS_REQUEST, 
     ALL_PRODUCTS_SUCCESS, 
     ALL_PRODUCTS_FAIL,
     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCES,
     PRODUCT_DETAILS_FAIL,
     CLEAR_ERRORS} from "../constants/productConstants";
 
 export const productsReducer = (state ={ products: []}, action)=>{
     switch(action.type){
         case ALL_PRODUCTS_REQUEST:
             return{
                 loading:true,
                 productos:[]
             }
 
         case ALL_PRODUCTS_SUCCESS:
             return{
                 loading:false,
                 productos: action.payload.productos,
                 cantidad: action.payload.caantidad
             }
 
         case ALL_PRODUCTS_FAIL:
             return{
                 loading:false,
                 error: action.payload
             }
 
         case CLEAR_ERRORS:
             return{
                 ...state,
                 error:null
             }
 
 
         default:
             return state;
     }
 }

//Reducer para los detalles
export const productDetailsReducer = (state ={ product: {}}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case PRODUCT_DETAILS_SUCCES:
            return{
                loading:false,
                product: action.payload,
            }

        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }


        default:
            return state;
    }
}