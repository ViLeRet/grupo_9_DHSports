module.exports = (sequelize, DataTypes) => {
    let alias = "Roles";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false ,
        tableName: 'roles'
    }
    const Role = sequelize.define(alias, cols, config);
    Role.associate = function(models) {
        Role.hasMany(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        });
    }
    return Role;
}
