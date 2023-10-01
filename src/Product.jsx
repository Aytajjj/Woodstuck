import React, { Component } from 'react'

export class Product extends Component {
      constructor(){
        super();
        
        this.state ={
            photo:"https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/marina-01-350x350.jpg",
            title:"Patrimony Ultra Calibre",
            author:"$4,233,00"
        }
      
      }
        
        
    
     nextBook=()=>{
        this.setState({
            photo:"https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/patrimony-03-600x638.jpg",
            title:"$8,400.00",
            author:"Possession chain motif ring"
        })
    }
    prevbook=()=>{
      this.setState({
         photo:"https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/marina-01-350x350.jpg",
            title:"Patrimony Ultra Calibre",
            author:"$4,233,00"
      })
      
    }
         Second=()=>{
        this.setState({
            photo:"https://woodstock.temashdesign.me/watch/wp-content/uploads/sites/3/2016/03/moto360-01-350x350.jpg",
            title:"Motorola Moto 360",
            author:"$20000"
        })
    }
  render() {
    return (
      <div className='Product'>
       
        <div className="cardss">
 <div  onMouseEnter={this.nextBook} onMouseOut={this.prevbook}
    className="card" style={{width: '18rem'}}>
      <div className="img">

            <img src={this.state.photo} className="card-img-top" alt="..." />

      </div>
            <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.author}</p>
                
            </div>
            </div>


        </div>
      </div>
    )
  }
}

export default Product