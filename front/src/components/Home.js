import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id='encabezado_productos'>Ultimos productos</h1>

        <section id='productos' className='container mt-5'>
            <div className='row'>
                {/*Producto 1 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-gold-gato.jpg' alt='Nutra gold'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='localhost:3000'>Nutra gold gatos</a> </h5>
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 4 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='localhost:3000' id='view_btn' className='btn btn-lock'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-gold-perro-adulto.jpg' alt='Nutra gold perros adultos'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='localhost:3000'>Nutra gold perros adultos</a> </h5>
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 7 reviews</span>
                            </div>
                            <p className='card-text'>$82.000</p><a href='localhost:3000' id='view_btn' className='btn btn-lock'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 3*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-gold-perro.jpg' alt='Nutra gold perro'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='localhost:3000'>Nutra gold perros</a> </h5>
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 1 reviews</span>
                            </div>
                            <p className='card-text'>$50.000</p><a href='localhost:3000' id='view_btn' className='btn btn-lock'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-nuggets-gato.jpg' alt='Nutra gold'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='localhost:3000'>Nutra nuggets gatos</a> </h5>
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$40.000</p><a href='localhost:3000' id='view_btn' className='btn btn-lock'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </Fragment>
  )
}
