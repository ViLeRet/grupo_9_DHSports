module.exports = (sequelize, DataTypes) => {
    let alias = 'product_images'
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
    const ProductImage = sequelize.define(alias, cols, config);

    //Metodo belongsToMany???
    
    return ProductImage;
    }

