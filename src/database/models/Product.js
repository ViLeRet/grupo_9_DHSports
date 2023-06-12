module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descrption: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        images: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        size: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        color: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'products'
    }
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.belongsTo(models.ProductCategory, {
            as:'product_categories',
            foreignKey: 'product_categories_id',
        });
        Product.associate = function(models) {
            Product.belongsTo(models.ProductBrand, {
                as:'product_brand',
                foreignKey: 'product_brand_id',
            });
        Product.associate = function(models) {
            Product.belongsToMany(models.ProductImage, {
                as:'images',
                through:'product_images',
                foreignKey:'product_images_id'
            });
        }
        
    }
    return Product;
}
}

