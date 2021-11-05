const Pet = require("./pet");
const User = require("./User");

User.hasMany(Pet, { foreignKey: "owner_id" });
Pet.belongsTo(User, { foreignKey: "owner_id" });

module.exports = { User, Pet };
