module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductBrand';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false},
          name: {
            type: DataTypes.TEXT,
            allowNull: false
            },
          origin: {
            type: DataTypes.TEXT,
            allowNull: false
          }
    };
    let config =  {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'product_brand'
    }
    const productBrand = sequelize.define(alias, cols, config);
    return productBrand;
}