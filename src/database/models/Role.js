module.exports = (sequelize, DataTypes) => {
    let alias = "Roles";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    let config = { timestamps: false }
    const Role = sequelize.define(alias, cols, config);
    return Role;
}
