module.exports = (sequelize, DataTypes) => {
  const AspiranteProfesion = sequelize.define(
    "AspiranteProfesion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      aspirante_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Aspirante",
          key: "id",
        },
      },
      profesion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Profesion",
          key: "id",
        },
      },
    },
    {
      tableName: "aspirante_profesion",
      timestamps: false,
    }
  );
  return AspiranteProfesion
};
