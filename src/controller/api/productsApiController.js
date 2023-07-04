const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Product.findAll()
            .then((products) => { // Agrega el parámetro 'products' en la función 'then'
                return res.status(200).json({
                    data: products
                });
            })
            .catch((error) => { // Manejo de errores en caso de que ocurra alguno
                console.error(error);
                return res.status(500).json({
                    message: 'Error occurred while fetching products',
                    error: error.message
                });
            });
    }
};