const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recommend: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    reported: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    reviewer_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reviewer_email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    helpfulness: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reviews',
    schema: 'sdctables',
    timestamps: false,
    indexes: [
      {
        name: "reviews_pkey1",
        unique: true,
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
};
