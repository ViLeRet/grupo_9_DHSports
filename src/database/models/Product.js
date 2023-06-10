module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
        },
        discount: {
            type: DataTypes.INTEGER,
        },
        marca: {
            type: DataTypes.STRING,
        },
        talle: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false ,
        tableName: 'products'
    }
    const Product = sequelize.define(alias, cols, config);
    return Product;
}


