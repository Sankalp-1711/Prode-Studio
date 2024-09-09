import React from 'react'
import './Trending.scss';
import Card1 from '../../assets/Card.png'
import Card2 from '../../assets/Card2.png'
import Card3 from '../../assets/Card3.png'
import Card4 from '../../assets/Card4.png'
const accessories = [
    {
      id: 1,
      name: 'Western Brooch',
      price: 1000,
      image: Card1, // Replace with actual image path
    },
    {
      id: 2,
      name: 'Western Brooch',
      price: 1000,
      image: Card2, // Replace with actual image path
    },
    {
      id: 3,
      name: 'Western Brooch',
      price: 1000,
      image: Card3, // Replace with actual image path
    },
    {
      id: 4,
      name: 'Western Brooch',
      price: 1000,
      image: Card4, // Replace with actual image path
    },
  ];
  
  const TrendingAccessories = () => {
    return (
      <section className="trending-accessories">
        <h2 className="heading">Trending Accessories</h2>
        
        <div className="categories">
          <span className="active">Brooch</span>
          <span>Necklace</span>
          <span>Clutches</span>
          <span>Bracelet</span>
          <span>Ring</span>
          <span>Tie</span>
        </div>
  
        <div className="accessories-grid">
          {accessories.map((item) => (
            <div className="accessory-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>(USD) ${item.price}</p>
            </div>
          ))}
        </div>
  
        <button className="view-all-btn">View All Accessories</button>
      </section>
    );
  };
  

export default TrendingAccessories;