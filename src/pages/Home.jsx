import "./Home.css";

const Home = ({ cart, setCart }) => {
  const vegetables = [
    { name: "Tomato", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-tomato_1.jpg", cost: 20, discountPercent: 10, realPrice: 22.22 },
    { name: "Potato", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-potato-red.jpg", cost: 15, discountPercent: 5, realPrice: 15.79 },
    { name: "Carrot", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-carrot.jpg", cost: 25, discountPercent: 20, realPrice: 31.25 },
    { name: "Onion", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-onion.jpg", cost: 18, discountPercent: 10, realPrice: 20.00 },
    { name: "Capsicum", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-green-capsicum.jpg", cost: 40, discountPercent: 15, realPrice: 47.06 },
    { name: "Cucumber", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-cucumber.jpg", cost: 30, discountPercent: 5, realPrice: 31.58 },
    { name: "Brinjal", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-brinjal.jpg", cost: 25, discountPercent: 8, realPrice: 27.17 },
    { name: "Cauliflower", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-cauliflower.jpg", cost: 35, discountPercent: 10, realPrice: 38.89 },
    { name: "Spinach", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-spinach.jpg", cost: 15, discountPercent: 5, realPrice: 15.79 },
    { name: "Radish", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-radish.jpg", cost: 12, discountPercent: 8, realPrice: 13.04 },
    { name: "Broccoli", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-broccoli.jpg", cost: 60, discountPercent: 10, realPrice: 66.67 },
    { name: "Cabbage", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-cabbage.jpg", cost: 20, discountPercent: 5, realPrice: 21.05 },
    { name: "Pumpkin", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-pumpkin.jpg", cost: 25, discountPercent: 10, realPrice: 27.78 },
    { name: "Lettuce", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-lettuce.jpg", cost: 45, discountPercent: 15, realPrice: 52.94 },
    { name: "Beetroot", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-beetroot.jpg", cost: 28, discountPercent: 5, realPrice: 29.47 },
    { name: "Bottle Gourd", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-bottle-gourd.jpg", cost: 22, discountPercent: 8, realPrice: 23.91 },
    { name: "Green Beans", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-green-beans.jpg", cost: 35, discountPercent: 10, realPrice: 38.89 },
    { name: "Peas", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-green-peas.jpg", cost: 50, discountPercent: 15, realPrice: 58.82 },
    { name: "Okra", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-okra.jpg", cost: 30, discountPercent: 5, realPrice: 31.58 },
    { name: "Corn", image: "https://www.fast2cart.com/media/catalog/product/cache/2fe2ed80b1a259a48c3b14a959cc70e8/f/2/f2c-fresh-sweet-corn.jpg", cost: 40, discountPercent: 10, realPrice: 44.44 },
  ];

  const formattedVegetables = vegetables.map((veg) => ({
    ...veg,
    realPrice: veg.realPrice.toFixed(2),
  }));

  const addToCart = (veg) => {
    setCart((prevCart) => [...prevCart, veg]);
  };

  return (
    <div>
      <h1>Vegetables</h1>
      <div className="vegetable-grid">
        {formattedVegetables.map((veg, index) => (
          <div key={index} className="vegetable-card">
            <img src={veg.image} alt={veg.name} />
            <h3>{veg.name}</h3>
            <p>Cost: ₹{veg.cost}</p>
            <p>Discount: {veg.discountPercent}%</p>
            <p>Original Price: ₹{veg.realPrice}</p>
            <button onClick={() => addToCart(veg)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
