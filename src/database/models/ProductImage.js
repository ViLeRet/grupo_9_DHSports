module.exports = (sequelize, DataTypes) => {
  let alias = 'product_images';
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  };
  let config = {
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    tableName: 'roles',
  };
  const ProductImage = sequelize.define(alias, cols, config);

  // ProductImage.associate = function (models) {
  //   ProductImage.belongsToMany(models.Product, {
  //     as: 'products',
  //     through: 'product_image_product', // Nombre de la tabla intermedia
  //     foreignKey: 'product_image_id',
  //     otherKey: 'product_id',
  //   });
  // };

  return ProductImage;
};