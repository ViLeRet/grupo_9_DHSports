const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Product
            .findAll()
            .then(() => {
                return res.status(200).json({
                    data: products
                })
            })
    }
}