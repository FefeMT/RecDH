const model = function(sequelize,DataTypes){
    let alias = 'actor';
    let columns = {
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: "actors",
        timestamps: false
    }
    const Actor = sequelize.define(alias,columns,config);

    Actor.associate = function (models) {
        Actor.belongsToMany(models.movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }
    return Actor;
}

module.exports = model;