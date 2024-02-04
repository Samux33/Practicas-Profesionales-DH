module.exports = (sequelize, DataTypes) => {
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
      },
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
      timestamps: false,
    });
    Aspirante.belongsTo(modelos.Genero, {
      as: "genero",
      foreignKey: "genero_id",
    });
  };
  // función para eliminar campos no necesarios y convertir a Aspirante.profesiones en un array de strings
  Aspirante.findAllFormatted = function () {
    return Aspirante.findAll({
      include: [{ association: "profesiones" }, { association: "genero" }],
    }).then((result) => {
      return result.map((aspirante) => {
        let formattedAspirante = { ...aspirante.get() };
        delete formattedAspirante.genero_id;
        formattedAspirante.genero = formattedAspirante.genero.nombre;
        formattedAspirante.profesiones = formattedAspirante.profesiones.map(
          (e) => e.nombre
        );
        formattedAspirante.imagen=`http://localhost:${process.env.PORT}/images/${aspirante.imagen}`
        return formattedAspirante;
      });
    });
  };

  return Aspirante;
};
