const model = function(sequelize,DataTypes){
    let alias = 'genre';
    let columns = {
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
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