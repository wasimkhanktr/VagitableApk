import React from "react";
import "./VegetableModal.css"; // CSS file for modal styling

const VegetableModal = ({ vegetable, isOpen, onClose, onAddToCart, onBuyNow, quantity, setQuantity }) => {
  if (!isOpen || !vegetable) return null;

  // Handle quantity increase and decrease
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Hide Button (top-left corner) */}
        <button className="hide-btn" onClick={onClose}>
          &#10006; {/* Using 'X' character for hide */}
        </button>
        
        <h2>{vegetable.name}</h2>
        <img src={vegetable.image} alt={vegetable.name} className="modal-image" />
        <p>Cost: ₹{vegetable.cost}</p>
        <p>Discount: {vegetable.discountPercent}%</p>
        <p>Original Price: ₹{vegetable.realPrice}</p>
        
        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <button className="quantity-btn" onClick={handleDecrease}>-</button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncrease}>+</button>
        </div>

        <div className="modal-actions">
          <button onClick={() => onAddToCart(vegetable, quantity)}>Add to Cart</button>
          <button onClick={() => onBuyNow(vegetable, quantity)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default VegetableModal;
