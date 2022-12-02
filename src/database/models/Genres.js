const model = function(sequelize,DataTypes){
    let alias = 'genre';
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
        ranking: {
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.BOOLEAN
        }
    }
    let config = {
        tableName: "genres",
        paranoid: true,
        timestamps: false
    }
    const Genre = sequelize.define(alias,columns,config);

    Genre.associate = function (models) {
        Genre.hasMany(models.movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre;
}

module.exports = model;