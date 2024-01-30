const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Profesion = sequelize.define("Genero", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
},
{
    timestamps:false,
    tableName:'profesiones'
}
);

Profesion.associate(modelos=>{
    Profesion.belongsToMany(modelos.Aspirante,{
        as:'profesiones',
        through:'Aspirante_Profesion',
        foreignKey:'profesion_id',
        otherKey:'aspirante_id'
    })
})

module.exports=Profesion