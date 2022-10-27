import React, { Fragment } from 'react'
import { LogoutButton } from './Logout'

const Headerlogout = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar brand'>
                    <img src='./images/logo-tienda-mascotas.png' alt='Hola'></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className="input-group">
                    <input
                    type="text"
                    id='search_field'
                    className="form-control"
                    placeholder='¿Que producto busca?'>
                    </input>
                    <div className="input-group-append">
                        <button id='search-btn' className="btn">
                            <i className="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <LogoutButton></LogoutButton>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-shopping-cart fa-2x text-white"></i>
                <span className='ml-1' id='cart_count'>2</span>
            </div>
        </nav>
    </Fragment>
  )
}

export default Headerlogout