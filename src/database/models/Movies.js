const model = function(sequelize,DataTypes){
    let alias = 'movie';
    let columns = {
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
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
        timestamps: false
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
            timestamps: false
        })
    }

    return Movie;
}

module.exports = model;