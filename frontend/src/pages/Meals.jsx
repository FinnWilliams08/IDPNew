import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { sampleProductsList } from '../assets/sampleProducts';
import { Footer } from '../components/Footer'; // Import the Footer component
import './Meals.css'; // Import the CSS file

export const Meals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    diabetic: false,
    notForDiabetics: false,
    dairyFree: false,
    easyToChew: false,
  });

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredProducts = sampleProductsList.filter((product) => {
    const matchesSearchQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiabetic = !filters.diabetic || product.description.toLowerCase().includes('suitable for diabetic');
    const matchesNotForDiabetics = !filters.notForDiabetics || product.description.toLowerCase().includes('not for diabetics');
    const matchesDairyFree = !filters.dairyFree || product.description.toLowerCase().includes('dairy-free');
    const matchesEasyToChew = !filters.easyToChew || product.description.toLowerCase().includes('easy to chew');

    return matchesSearchQuery && matchesDiabetic && matchesNotForDiabetics && matchesDairyFree && matchesEasyToChew;
  });

  const starters = filteredProducts.filter((product) => product.category === 'Starters');
  const mains = filteredProducts.filter((product) => product.category === 'Mains');

  return (
    <div className="meals-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="filters">
        <label>
          <input
            type="checkbox"
            name="diabetic"
            checked={filters.diabetic}
            onChange={handleFilterChange}
          />
          Diabetic
        </label>
        <label>
          <input
            type="checkbox"
            name="notForDiabetics"
            checked={filters.notForDiabetics}
            onChange={handleFilterChange}
          />
          NOT for Diabetics
        </label>
        <label>
          <input
            type="checkbox"
            name="dairyFree"
            checked={filters.dairyFree}
            onChange={handleFilterChange}
          />
          Dairy-Free
        </label>
        <label>
          <input
            type="checkbox"
            name="easyToChew"
            checked={filters.easyToChew}
            onChange={handleFilterChange}
          />
          Easy to Chew
        </label>
      </div>

      <h5>Starters</h5>
      <p>Our starters are carefully crafted to provide a delightful beginning to your meal. Each dish is prepared with fresh ingredients and a touch of culinary expertise to ensure a perfect balance of flavors and textures.</p>
      <div className="product-cards-container">
        {starters.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h5>Mains</h5>
      <p>Our mains are the heart of our menu, meticulously prepared to offer a satisfying and nourishing experience. We take pride in using high-quality ingredients and traditional cooking methods to bring you meals that are both delicious and wholesome.</p>
      <div className="product-cards-container">
        {mains.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};