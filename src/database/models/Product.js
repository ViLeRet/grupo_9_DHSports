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
            type: Sequelize.TEXT,
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
    return Product;
}


