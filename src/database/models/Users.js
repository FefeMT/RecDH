const model = function(sequelize,DataTypes){
    let alias = 'user';
    let columns = {
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        remember_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rol: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "users",
        paranoid: true,
        timestamps: true
    }
    const User = sequelize.define(alias,columns,config);
    return User;
}

module.exports = model;