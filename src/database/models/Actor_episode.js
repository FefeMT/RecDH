const model = function(sequelize,DataTypes){
    let alias = 'actor_episode';
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
        episode_id: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'actor_episode',
        timestamps: false
    }
    return sequelize.define(alias,columns,config);
}

module.exports = model;