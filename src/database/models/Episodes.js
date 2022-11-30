const model = function(sequelize,DataTypes){
    let alias = 'episode';
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
        number: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        season_id: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'episodes',
        timestamps: false
    }
    return sequelize.define(alias,columns,config);
}

module.exports = model;