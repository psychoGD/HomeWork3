import React from 'react'
import { products } from './Data'
import Productitem from './Productitem'
const productsList = products.map(p=>
    <li>
        <Productitem product={p}></Productitem>
    </li>
);
export default function Products() {
  return (
    <div>
      {productsList}
    </div>
  )
}
