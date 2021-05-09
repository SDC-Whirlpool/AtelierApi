const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviewchars', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    char_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'characteristics',
        key: 'char_id'
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'reviews',
        key: 'review_id'
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reviewchars',
    schema: 'sdctables',
    timestamps: false
  });
};
