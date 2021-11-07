const Favorite = require("./favorite");
const Pet = require("./pet");
const User = require("./User");

User.hasMany(Pet, { foreignKey: "owner_id" });
Pet.belongsTo(User, { foreignKey: "owner_id" });
User.hasMany(Favorite, { foreignKey: "id" });
Favorite.belongsToMany(User, { foreignKey: "id" });
module.exports = { User, Pet, Favorite };
