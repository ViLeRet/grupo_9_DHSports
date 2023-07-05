const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Product.findAll()
            .then((products) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: products.length,
                        url: '/api/products'
                    },
                    data: products
                });
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({
                    message: 'Ocurrió un error al buscar productos',
                    error: error.message
                });
            });
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then((product) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: 1,
                        url: '/api/products'
                    },
                    data: product
                });
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({
                    message: 'Ocurrió un error al buscar el producto',
                    error: error.message
                });
            });
    },

    create: async (req, res) => {
        try {
            const productToCreate = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                images: req.body.images,
                size: req.body.size,
                color: req.body.color,
                category: req.body.category,
                brand: req.body.brand
            };

            const createdProduct = await db.Product.create(productToCreate);
            res.status(201).json({
                meta: {
                    status: 201,
                    url: '/api/products'
                },
                data: createdProduct,
            });
        } catch (err) {
            res.status(400).json({
                message: 'Error al crear el producto',
                error: err.message
            });
        }
    },

    delete: async (req, res) => {
        try {
          const productId = req.params.id;
          const product = await db.Product.findByPk(productId);
    
          if (product) {
            await db.Product.destroy({ where: { id: productId } });
            res.send('Producto eliminado con éxito');
          } else {
            res.status(404).json({
              message: 'El producto no existe'
            });
          }
        } catch (err) {
          res.status(500).json({
            message: 'Error al eliminar el producto',
            error: err.message
          });
        }
      }
    };