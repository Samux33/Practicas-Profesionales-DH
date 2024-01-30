const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Aspirante = sequelize.define(
  "Aspirante",
  {
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
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING(45),
    },
    linkedIn: {
      type: DataTypes.STRING(45),
    },
    nacimiento: {
      type: DataTypes.STRING(45),
    },
    genero_id: {
      type: DataTypes.STRING(45),
    },
    imagen: {
      type: DataTypes.STRING(45),
      defaultValue: "default.png",
    }
  },
  {
    tableName: "aspirantes",
    timestamps: false,
  }
);

Aspirante.associate = (modelos) => {
  Aspirante.belongsToMany(modelos.Profesion, {
    as: "profesiones",
    through: "Aspirante_Profesion",
    foreignKey: "aspirante_id",
    otherKey: "profesion_id",
  });
  Aspirante.belongsTo(modelos.Genero,{
    as:'genero',
    foreignKey:'genero_id'
  })
};

module.exports = Aspirante;
