import React from "react";
import { NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import addCart from '../redux/actions/index';
import { useDispatch } from "react-redux";

const Item = () => {
   const {id} = useParams();
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   const dispatch = useDispatch();

   const addToCart = (product) => {
    dispatch(addCart(product));
   }

   useEffect(() => {
    const getProducts = async () =>
   {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setData(await response.json());
            setLoading(false);
    }
    getProducts();
   
},[])


const ShowProduct = () => {
    return (
        <>
        <div className="col-md-6" >
            <img className="image" src={data.image} alt={data.title} height="400px" width="380px"/>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{data.category}</h4>
            <h1 className="display-5">{data.title}</h1>
            <p className="lead fw-bolder">
                Rating    {data.rating && data.rating.rate}
                <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4"> ${data.price}</h3>
            <p className="lead">{data.description}</p>
            <button className="btn btn-outline-dark px-4 py-2" onClick = {() => addToCart(data)}> Add to cart </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-4 py-2"> Go to cart </NavLink>
        </div>
        </>
    )
}

return (
    <>
    <div className="container py-5">
        <div className="row py-5">
        {loading ? (<p> Wait Please ...</p>) : <ShowProduct/>}
        </div>
    </div>
    </>
)

}
export default Item;