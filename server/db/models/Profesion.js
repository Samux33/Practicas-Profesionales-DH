module.exports = (sequelize, DataTypes) => {
  const Profesion = sequelize.define(
    "Profesion",
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
    },
    {
      timestamps: false,
      tableName: "profesiones",
    }
  );

  Profesion.associate = (modelos) => {
    Profesion.belongsToMany(modelos.Aspirante, {
      as: "profesiones",
      through: "Aspirante_Profesion",
      foreignKey: "profesion_id",
      otherKey: "aspirante_id",
      timestamps: false,
      onDelete: "CASCADE",
    });
  };
  Profesion.findAllFormatted = () => {
    return Profesion.findAll().then((result) => {
      return result.map((prof) => {
        let formattedProf = { id: prof.id, name: prof.nombre };
        return formattedProf;
      });
    });
  };
  return Profesion;
};
