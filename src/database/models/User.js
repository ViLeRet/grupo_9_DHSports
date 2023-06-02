module.exports = (sequelize, DataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        country: {
            type: DataTypes.VARCHAR,
        },
        email: {
            type: DataTypes.VARCHAR,
        },
        password: {
            type: DataTypes.VARCHAR,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
    };
    let config = { timestamps: false }
    const User = sequelize.define(alias, cols, config);
    return User;
}



