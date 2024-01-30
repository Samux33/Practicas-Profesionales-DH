const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Genero = sequelize.define("Genero", {
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
    tableName:'generos'
}
);

Genero.associate((modelos)=>{
    Genero.hasMany(modelos.Aspirante,{
        as:'genero',
        foreignKey:'genero_id'
    })
})

module.exports=Genero