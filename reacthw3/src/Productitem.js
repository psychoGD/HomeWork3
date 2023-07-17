import React, { createElement } from 'react'
import { DiscountCalculator } from './Utility'

let color = "#67b7fe";

function IsExpired({product}) {
    var style = "card ";
    if (product.expiredDate > new Date().getFullYear()) {
         style += "expired";
    }
    return(
        <div className={style}>
            

            {/* <h1>{new Date().toLocaleString().replace(',','')}</h1> */}
            <div className="left" style={{ backgroundColor: product.color }}  >
                {/* <img src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" alt="shoe" /> */}
                <img src={product.imageLink} alt="shoe" />
            </div>
            <div className="right">
                <div className="product-info">
                    <div className="product-name">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="details">
                        <h3>Winter Collection</h3>
                        <h2>{product.description}</h2>
                        <h4><span className="fa fa-dollar"></span>{DiscountCalculator(product.price, product.discountPercent)}</h4>
                        <h4 className="dis"><span className="fa fa-dollar"></span>{product.price}</h4>
                    </div>
                    {/* Bunlar Componente Cixardilmalidir? */}
                    <ul>
                        <li>SIZE</li>
                        <li className="bg">7</li>
                        <li className="bg">8</li>
                        <li className="bg">9</li>
                        <li className="bg">10</li>
                        <li className="bg">11</li>
                    </ul>
                    {/* Bunlar Componente Cixardilmalidir? */}
                    <ul>
                        <li>COLOR</li>
                        <li className="yellow"></li>
                        <li className="black"></li>
                        <li className="blue"></li>
                    </ul>
                    <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
                    <span className="foot"><i className="fa fa-shopping-cart"></i>Add TO Cart</span>
                </div>
            </div>
        </div>
    );
}

export default function Productitem({ product }) {


    return (
        <IsExpired product={product}></IsExpired>
    )
}
