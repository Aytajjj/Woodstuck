import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
      <div className='slider' >
   <div id="carouselExampleDark"  className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner" style={{ width: '100%',marginBottom:'20px' ,height: '500px' }}>
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2021/01/cat-jewellery.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Women jewellery</h5>
        <p>$762</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2021/01/cat-smart.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Men Watch </h5>
        <p>$567</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2021/01/cat-watch.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Men Watch</h5>
        <p>$399</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="text">
    <h1>Tag Your Heuor </h1>
<span>Lipsam magni, fuga vero, alias architecto iusto asperiores.</span>
</div>
      </div>
    )
  }
}

export default Slider