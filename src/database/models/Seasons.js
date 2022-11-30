const model = function(sequelize,DataTypes){
    let alias = 'season';
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
        end_date: {
            type: DataTypes.DATE
        },
        serie_id: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "seasons",
        timestamps: false
    }
    return sequelize.define(alias,columns,config);
}

module.exports = model;