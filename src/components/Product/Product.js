 import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
 import './Product.css';

 const Product = (props) => {
    //  console.log(props);
     const {name,img,seller,price,stock}=props.product;
     const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
     return (
         <div className="product" >
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name" >{name}</h4>
            <p>by:{seller}</p>
            <p>${price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button 
                 onClick={ ()=> props.handelAddToCart(props.product)}
            className="btn-regular" 
            > {cartIcon} add to curt</button>
            </div>
         </div>
     );
 };
 
 export default Product;