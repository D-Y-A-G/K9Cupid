const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorite extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    favorite_pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pet",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet"
  }
);

module.exports = Favorite;
