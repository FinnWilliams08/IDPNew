import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import eatImage from '../assets/eating.png'; // Import the image
import './Main.css'; // Import the CSS file
import { ProductCard } from '../components/ProductCard'; // Import the ProductCard component
import chickenstew from '../assets/chickenstew.png'; // Import the image
import fishnchips from '../assets/fishnchips.png'; // Import the image
import { Footer } from '../components/Footer'; // Import the Footer component

export const Main = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleButtonClick = () => {
    navigate('/meals'); // Navigate to the Meals page
  };

  const featuredMeals = [
    {
       id: "1",
         title: "Chicken Stew",
         alt: "Chicken Stew",
         imageSource: chickenstew,
         price: 13.99,
         description: "A tasty and comforting chicken stew made with soft, slow-cooked chicken, fresh vegetables, and a mild, flavorful broth. It’s high in protein to help with muscle strength and has fiber for good digestion. The soft texture makes it easy to chew and swallow, perfect for elderly people. It’s also low in added sugar and suitable for diabetics.",
         availability: true,
    },
    {
    id: "2",
    title: "Fish and Chips",
    alt: "Fish and Chips",
    imageSource: fishnchips,
    price: 12,
    description: "A classic and comforting meal featuring lightly battered, tender white fish, served with soft, golden chips. The fish is rich in protein and omega-3 fatty acids, which support heart and brain health. The batter is light and crispy, while the fish remains soft and easy to chew. Served with a side of peas for extra fiber and vitamins, this meal is both tasty and nutritious. Low in added salt and carefully prepared to be gentle on digestion, making it a great choice for elderly individuals.",
    availability: true,
    },
  ];

  return (
    <div className="container">
      <h2 className="welcome-text">Welcome to Your Local Food Service!</h2>
      <div className="hero-section" style={{ backgroundImage: `url(${eatImage})` }}>
        <div className="hero-text">
          <h1>Delicious Meals Delivered with Care</h1>
          <p>Bringing comfort and nutrition right to your doorstep</p>
          <button onClick={handleButtonClick}>Browse Our Menu</button>
        </div>
      </div>
      <h2 className="featured-meals-title">Featured Meals</h2>
      <div className="featured-meals">
        {featuredMeals.map((meal) => (
          <ProductCard key={meal.id} product={meal} />
        ))}
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};