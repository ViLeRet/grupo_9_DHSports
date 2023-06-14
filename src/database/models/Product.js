module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
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
        Product.hasMany(models.Users, {
            as: "Users",
            foreignKey: "Product_id"
        });
        Product.belongsTo(models.ProductBrand, {
            as: 'product_brand',
            foreignKey: 'product_brand_id',
        });
        Product.belongsToMany(models.ProductImage, {
            as: 'images',
            through: 'product_images',
            foreignKey: 'product_id'
        });
    }

    return Product;
}
    


