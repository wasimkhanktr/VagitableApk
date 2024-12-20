import React from "react";
import './Home.css';


const Home = () => {
  const vegetables = [
    {
      name: "Tomato",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-tomato_1.jpg",
      cost: 20,
      discountPercent: 10,
      realPrice: 22.22,
    },
    {
      name: "Potato",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-potato-red.jpg",
      cost: 15,
      discountPercent: 5,
      realPrice: 15.79,
    },
    {
      name: "Carrot",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-carrot.jpg",
      cost: 25,
      discountPercent: 20,
      realPrice: 31.25,
    },
    {
      name: "Cabbage",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-cabbage.jpg",
      cost: 12,
      discountPercent: 8,
      realPrice: 13.04,
    },
    {
      name: "Spinach",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-spinach.jpg",
      cost: 10,
      discountPercent: 5,
      realPrice: 10.53,
    },
    {
      name: "Broccoli",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-broccoli.jpg",
      cost: 35,
      discountPercent: 15,
      realPrice: 41.18,
    },
    {
      name: "Cauliflower",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-cauliflower.jpg",
      cost: 30,
      discountPercent: 10,
      realPrice: 33.33,
    },
    {
      name: "Capsicum",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-capsicum.jpg",
      cost: 40,
      discountPercent: 20,
      realPrice: 50,
    },
    {
      name: "Brinjal",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-brinjal.jpg",
      cost: 18,
      discountPercent: 10,
      realPrice: 20,
    },
    {
      name: "Bottle Gourd",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-bottle-gourd.jpg",
      cost: 15,
      discountPercent: 5,
      realPrice: 15.79,
    },
    {
      name: "Bitter Gourd",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-bitter-gourd.jpg",
      cost: 22,
      discountPercent: 12,
      realPrice: 25,
    },
    {
      name: "Radish",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-radish.jpg",
      cost: 12,
      discountPercent: 10,
      realPrice: 13.33,
    },
    {
      name: "Beetroot",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-beetroot.jpg",
      cost: 28,
      discountPercent: 15,
      realPrice: 32.94,
    },
    {
      name: "Sweet Corn",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-sweet-corn.jpg",
      cost: 35,
      discountPercent: 10,
      realPrice: 38.89,
    },
    {
      name: "Mushrooms",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-mushroom.jpg",
      cost: 50,
      discountPercent: 10,
      realPrice: 55.56,
    },
    {
      name: "Ladyfinger",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-ladyfinger.jpg",
      cost: 22,
      discountPercent: 5,
      realPrice: 23.16,
    },
    {
      name: "Peas",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-peas.jpg",
      cost: 35,
      discountPercent: 15,
      realPrice: 41.18,
    },
    {
      name: "Pumpkin",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-pumpkin.jpg",
      cost: 25,
      discountPercent: 10,
      realPrice: 27.78,
    },
    {
      name: "Zucchini",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-zucchini.jpg",
      cost: 45,
      discountPercent: 20,
      realPrice: 56.25,
    },
    {
      name: "Chillies",
      image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-chillies.jpg",
      cost: 18,
      discountPercent: 10,
      realPrice: 20,
    },
  ];

  return (
    <div className="vegetable-grid">
      {vegetables.map((veg, index) => (
        <div key={index} className="vegetable-card">
          <img src={veg.image} alt={veg.name} />
          <h3>{veg.name}</h3>
          <p>Cost: ₹{veg.cost}</p>
          <p>Discount: {veg.discountPercent}%</p>
          <p>Original Price: ₹{veg.realPrice.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
