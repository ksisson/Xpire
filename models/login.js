module.exports = function(sequelize, DataTypes) {
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