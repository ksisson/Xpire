module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var login = sequelize.define("login", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1]
      }
    }
  });
  return login;
};
=======
    var login = sequelize.define("login", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });

    login.associate = function(models){
        login.belongsToMany(models.api, {
            through: "mastertable"
        });
    };

    return login;
   };
>>>>>>> cb69cf8f241365430b61647606d950f0d4193f2f
