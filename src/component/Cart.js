import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import addCart from "../redux/actions";
import delCart from "../redux/actions/deleteaction";
const Cart = () => {

    const a = useSelector((state) => state.handleCart);

    const [product, getProduct] = useState([]);
    const [empty, notEmpty] = useState(true);

    const dispatch = useDispatch();

   const plus = (product) => {
    dispatch(addCart(product));
   }

   const minus = (product) => {
    dispatch(delCart(product))
   }
    useEffect(() => {

        getProduct(a);
        console.log(a.length)
        if(a.length == 0){
            notEmpty(true);
        }
        else { notEmpty(false)}
    })

const ShowProduct = () => {
    return(
    <>
    { 
        product.map((x) => {
            return (
                <div className="card mb-3" >
                    <div className="row g-0" >
                        <div className="col-md-4" >
                            <img src={x.image} height="200px" width="180px" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <p className="lead fw-bold">
                                    {x.qty} X ${x.price} = ${x.qty*x.price}
                                </p>
                                <button className="btn btn-dark me-4">
                                    <i className="fa fa-minus" onClick={()=>minus(x)}></i>
                                </button>
                                <button className="btn btn-dark ">
                                    <i className="fa fa-plus" onClick={()=>plus(x)}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </>)
}

    return (
        <> 
        {empty ? (<h1 className="my-5"> Your cart is empty</h1>) : <ShowProduct/>}
        </>
    )
  

}
export default Cart;