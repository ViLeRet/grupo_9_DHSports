const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

module.exports = User;

