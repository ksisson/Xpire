module.exports = function(sequelize, DataTypes) {
    var api = sequelize.define("api", {
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      shelf_life: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
          type: DataTypes.STRING,
          allowedNull: false,
          validate: {len: [1]}
      }
    });

    api.associate = function(models){
        api.belongsToMany(models.login, {
            through: "mastertable"
        })
    }

    return api;
   };