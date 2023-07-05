const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req, res) => {
      try {
        const products = await db.Product.findAll({
          include: ['categories']
        });
  
        const count = products.length;
        const countByCategory = {};
  
        products.forEach((product) => {
          product.categories.forEach((category) => {
            if (countByCategory[category.name]) {
              countByCategory[category.name]++;
            } else {
              countByCategory[category.name] = 1;
            }
          });
        });
  
        const productData = {
          count,
          countByCategory,
          products: products.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            categories: product.categories.map((category) => category.name),
            detail: `/api/products/${product.id}`
          }))
        };
  
        return res.status(200).json(productData);
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Ocurrió un error al buscar productos',
          error: error.message
        });
      }
    },
  
    detail: async (req, res) => {
      try {
        const productId = req.params.id;
        const product = await db.Product.findByPk(productId, {
          include: ['categories']
        });
  
        if (product) {
          const productData = {
            id: product.id,
            name: product.name,
            description: product.description,
            categories: product.categories.map((category) => category.name),
            image: product.ProductImage
          };
  
          return res.status(200).json(productData);
        } else {
          return res.status(404).json({
            message: 'El producto no existe'
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: 'Ocurrió un error al buscar el producto',
          error: error.message
        });
      }
    }
  };