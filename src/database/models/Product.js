const sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
        },
        marca: {
            type: DataTypes.STRING,
        },
        talle: {
            type: DataTypes.INTEGER,
        },
        color: {
            type: DataTypes.STRING,
        },
    };
    let config = {
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.hasMany(models.User, {
            as: "users",
            foreignKey: "Product_id"
        });
        Product.belongsTo(models.ProductBrand, {
            as: 'product_brand',
            foreignKey: 'product_brand_id',
        });
        Product.belongsTo(models.ProductCategory, {
            as: 'product_category',
            foreignKey: 'category',
        });
        Product.belongsToMany(models.ProductImage, {
            as: 'images',
            through: 'product_images',
            foreignKey: 'product_id'
        });
    }

    return Product;
}
    


