import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart, delall, remCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }
    const handleDelall = (item) => {
        dispatch(delall(item))
    }
    const handleRem = (item) => {
        dispatch(remCart(item))
    }


    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5 ">
                <div className="container py-4 my-5">
                    <div className="row my-5">
                        <h3 className="text-center my-5">Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        return(
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-1 my-2">
                        <button className="btn btn-outline-dark me-4" onClick={()=>handleRem(product)}>
                                <i className="fa fa-times">Remove</i>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        )

    }
    const buttons = (product) => {
        return(
            <>
                <div className="container">
                    <div className="row d-flex flex-column">
                    <button className="btn btn-outline-dark mb-3 w-50 mx-auto" onClick={()=> handleDelall(product)}>
                                 empty cart
                            </button>


                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-50 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;