import React, { useState, useEffect } from 'react'
import { getProducts } from "./helper/coreapicalls"
import "../styles.css"

import Base from './Base'
import Card from './Card'

export default function Home() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error); //box filled with data error
        console.log(error); // message "error"
      } else {
        setProducts(data); // box filled with data product
      }
    })
  }

  useEffect(() => { loadAllProducts() }, [])

  return (
    <Base title="Home page" description="Welcome to my store">
      <h1>Home Component</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Card product={product} />
            </div>
          )
        })}
      </div>
    </Base>
  )
}
