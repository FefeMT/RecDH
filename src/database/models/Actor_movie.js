const model = function(sequelize,DataTypes){
    let alias = 'actor_movie';
    let columns = {
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        actor_id: {
            type: DataTypes.INTEGER
        },
        movie_id: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'actor_movie',
        timestamps: false
    }
    const Actor_movie = sequelize.define(alias,columns,config);
    return Actor_movie;
}

module.exports = model;