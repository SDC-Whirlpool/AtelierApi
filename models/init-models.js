var DataTypes = require("sequelize").DataTypes;
var _characteristics = require("./characteristics");
var _reviewchars = require("./reviewchars");
var _reviewphotos = require("./reviewphotos");
var _reviews = require("./reviews");

function initModels(sequelize) {
  var characteristics = _characteristics(sequelize, DataTypes);
  var reviewchars = _reviewchars(sequelize, DataTypes);
  var reviewphotos = _reviewphotos(sequelize, DataTypes);
  var reviews = _reviews(sequelize, DataTypes);

  reviewchars.belongsTo(characteristics, { as: "char", foreignKey: "char_id"});
  characteristics.hasMany(reviewchars, { as: "reviewchars", foreignKey: "char_id"});
  reviewchars.belongsTo(reviews, { as: "review", foreignKey: "review_id"});
  reviews.hasMany(reviewchars, { as: "reviewchars", foreignKey: "review_id"});
  reviewphotos.belongsTo(reviews);
  reviews.hasMany(reviewphotos);

  return {
    characteristics,
    reviewchars,
    reviewphotos,
    reviews,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
