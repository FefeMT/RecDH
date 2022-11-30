const model = function(sequelize,DataTypes){
    let alias = 'migration';
    let columns = {
        migration: {
            type: DataTypes.STRING
        },
        batch: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "migrations",
        timestamps: false
    }
    return sequelize.define(alias,columns,config);
}

module.exports = model;