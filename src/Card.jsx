import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div className='cards'>
      <div className="card" style={{width: '18rem'}}>
        <div className="img">
  <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/seamaster-sp-02-1-350x350.jpg" className="card-img-top" alt="..." />

        </div>
  
    <h2 className="card-text">Watches</h2>
 
</div>
    <div className="card" style={{width: '18rem'}}>
    <div className="img">
  <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2021/01/cat-smart.jpg" className="card-img-top" alt="..." />

        </div>  <div className="card-body">
    <h2 className="card-text">Watches</h2>
  </div>
</div>
    <div className="card" style={{width: '18rem'}}>
    <div className="img">
  <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/patrimony-01-350x350.jpg" className="card-img-top" alt="..." />

        </div>  <div className="card-body">
    <h2 className="card-text">Watches</h2>
  </div>
</div>

    <div className="card" style={{width: '18rem'}}>
    <div className="img">
  <img src="https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/apwatch-01-350x350.jpg" className="card-img-top" alt="..." />

        </div>  <div className="card-body">
    <h2 className="card-text">Watches</h2>
  </div>
</div>

      </div>
    )
  }
}

export default Card