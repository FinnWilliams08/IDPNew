import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { sampleProductsList } from '../assets/sampleProducts';
import './Meals.css'; // Import the CSS file

export const Meals = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = sampleProductsList.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const starters = filteredProducts.filter(product => product.category === 'Starters');
  const mains = filteredProducts.filter(product => product.category === 'Mains');

  return (
    <div className="meals-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <h5>Starters</h5>
      <div className="product-cards-container">
        {starters.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h5>Mains</h5>
      <div className="product-cards-container">
        {mains.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};