const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('characteristics', {
    char_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'characteristics',
    schema: 'sdctables',
    timestamps: false,
    indexes: [
      {
        name: "characteristics_pkey",
        unique: true,
        fields: [
          { name: "char_id" },
        ]
      },
    ]
  });
};
