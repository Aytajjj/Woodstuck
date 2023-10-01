import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
      <header>
        <div className="components">
          
        <div className="logo1"><img  src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2021/01/woodstock-watch-logo.png" alt="" /></div>
       <div className="form">
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Search for Products" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
        </div>
    
<div className="dropdown">
  <span>Customer servis</span>
  <b>1-800-123-45-67</b>
  <div className="icon"><i class="fa-solid fa-sort-down"></i></div>
</div>
<div className="icon">
 <i class="fa-regular fa-notes"></i>
  <span>0 ITEMS</span>
  <span>$0.00</span>
</div>
        </div>
           <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2021/01/header-bg.jpg" alt="" />


</header>
<div className="header2">
  <ul>
    <li>HOME <i class="fa-solid fa-sort-down"></i></li>
    <li>THEME FEATURES</li>
    <li>OUR SHOP <i class="fa-solid fa-sort-down"></i></li>
    <li>ABOUT US</li>
    <li>BLOG</li>
  </ul>
</div>
</div>
    )
  }
}

export default Header