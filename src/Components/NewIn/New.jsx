import React from 'react'
import './New.scss'
import Model1 from '../../assets/Model1.png'
import Model2 from '../../assets/Model2.png'
import Model3 from '../../assets/Model3.png'
import Model4 from '../../assets/Model4.png'
const New = () => {
  return (
    <>
    <div className='Middle-Section'>
        <div className='middle-section-content'>
            <h2>
                New In
            </h2>
            <p>
            Explore pieces that never go out of style. Our timeless classics ensure you always look elegant,
            <br/>  no matter the occasion. Crafted with high-quality materials and 
            <br/>a keen eye for detail, these  pieces are designed to be wardrobe staples that you can rely on year after year
            </p>
        </div>
        <div className='middle-section-images'>
            <div className='allimages'>
            <div>
            <img src={Model1}></img>
            <div className='description'>
            <p style={{fontSize:"0.6rem"}}>COUTURE</p>
            <p style={{color:"#0A0A0B",fontSize:"1.2rem"}}>Green Western Dress</p>
            <p style={{fontSize:"0.8rem"}}>(USD)  $1000</p>
            </div>
            </div>
            <div>
            <img src={Model2}></img>
            <div className='description'>
            <p style={{fontSize:"0.6rem"}}>COUTURE</p>
            <p style={{color:"#0A0A0B",fontSize:"1.2rem"}}>Green Western Dress</p>
            <p style={{fontSize:"0.8rem"}}>(USD)  $1000</p>
            </div>
            </div>
            <div>
            <img src={Model3}></img>
            <div className='description'>
            <p style={{fontSize:"0.6rem"}} >COUTURE</p>
            <p style={{color:"#0A0A0B",fontSize:"1.2rem"}}>Green Western Dress</p>
            <p style={{fontSize:"0.8rem"}}>(USD)  $1000</p>
            </div>
            </div>
            <div>
            <img src={Model4}></img>
            <div className='description'>
            <p style={{fontSize:"0.6rem"}}>COUTURE</p>
            <p style={{color:"#0A0A0B",fontSize:"1.2rem"}}>Green Western Dress</p>
            <p style={{fontSize:"0.8rem"}}>(USD)  $1000</p>
            </div>
            </div>
            </div>
        </div>
        <div className='btn'>
            <button>View All</button>
        </div>
    </div>
    </>
  )
}

export default New