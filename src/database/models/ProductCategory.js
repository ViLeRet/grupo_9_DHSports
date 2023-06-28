module.exports = (sequelize, DataTypes) => {
    let alias = 'product_categories'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.TEXT ,
            allowNull:false
          }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false ,
        tableName: 'roles'
    }
    const ProductCategory = sequelize.define(alias, cols, config);
    // ProductCategory.associate = function(models){
    //     ProductCategory.hasMany(models.Product, {
    //         as:'products',
    //         foreignKey: 'product_id'
    //     });
    // }

    return ProductCategory;
}