import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import Card from './Card'
import Product from './Product'

export class App extends Component {
  render() {
    return (
        <>   
<Header />
<Slider />
<Card />
   <h3>Best Selling Products</h3>

<div className="div">
<Product />
<Product />
<Product />
<Product />
<Product />
<Product />

</div>


        </>
    )
  }
}

export default App