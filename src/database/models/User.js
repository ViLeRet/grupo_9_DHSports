module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT ,
        allowNull:false
      },
      country: {
        type: DataTypes.TEXT ,
        allowNull:false
      },
      email: {
        type: DataTypes.TEXT ,
        allowNull:false
      },
      password: {
        type: DataTypes.TEXT ,
        allowNull:false
      },
      // age: {
      //   type: DataTypes.INTEGER ,
      //   allowNull:false
      // },
      avatar:{
        type: DataTypes.TEXT ,
        allowNull:false
      }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false ,
        tableName: 'users'
    }
    const User = sequelize.define(alias, cols, config);
    User.associate = function(models) {
      User.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'role_id'
      });
    }
    return User;
}



