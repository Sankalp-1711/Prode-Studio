import React from 'react'
import './Collection.scss'
import Men1 from '../../assets/Men1.png'
import Men2 from '../../assets/Men2.png'
import Women1 from '../../assets/Women1.png'
import Women2 from '../../assets/Women2.png'
const Collection = () => {
  return (
   <>
   <div className='Collection'>
   <div className='mens-collection'>
    <div className='large-img'>
        <img src={Men1}></img>
    </div>
    <div className='small-img'>
        <img src={Men2}></img>
        <h1 style={{color:"#343A40",marginBottom:"0"}}>
Mens Collection
        </h1>
        <p style={{color:"#343A40",marginTop:"0"}}>
Timeless elegance meets modern sophistication.<br/> Meticulously crafted for 
style and comfort, our premium pieces elevate the 
<br/>discerning gentleman's wardrobe.
        </p>
        <button>
View Now
        </button>
    </div>
   </div>
   <div className='womens-collection'>
    <div>
    <div className='small-img-womens'>
        <img src={Women2}></img>
        <h1 style={{color:"#343A40",marginBottom:"0"}} >
Mens Collection
        </h1>
        <p style={{color:"#343A40",marginTop:"0"}} >
Timeless elegance meets modern sophistication.<br/> Meticulously crafted for 
style and comfort, our premium pieces elevate the 
<br/>discerning gentleman's wardrobe.
        </p>
        <button>
View Now
        </button>
    </div>
    </div>
    <div>
    <div className='large-img'>
        <img src={Women1}></img>
    </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Collection