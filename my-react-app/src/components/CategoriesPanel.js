import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesPanel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories'); // Ruta en  backend para obtener las categorías
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories-panel">
      <h2>Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <span>{category.name}</span>
            <span>Total de productos: {category.totalProducts}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPanel;