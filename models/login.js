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
