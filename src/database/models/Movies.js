const model = function(sequelize,DataTypes){
    let alias = 'movie';
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
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: "movies",
        paranoid: true,
        timestamps: true
    }
    const Movie = sequelize.define(alias,columns,config);

    Movie.associate = function (models) {
        Movie.belongsTo(models.genre, {
            as:'genre',
            foreignKey:'genre_id'
        }),
        Movie.belongsToMany(models.actor, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: true
        })
    }
    return Movie;
}

module.exports = model;