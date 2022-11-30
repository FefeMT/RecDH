const model = function(sequelize,DataTypes){
    let alias = 'serie';
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
        release_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "series",
        timestamps: false
    }
    return sequelize.define(alias,columns,config);
}

module.exports = model;