const express = require('express');
const router = express.Router();
const db = require('../dbConfig.js');
const initModels = require('../models/init-models');
var models = initModels(db);

/** DATABASE QUERIES */

exports.getReviews = ('/reviews', (req, res) => {
  const { product_id, page, count } = req.query;
  const limit = count ? +count : 25;
  const offset = page ? page * limit : 0;

  const responseObj = {
    product_id,
    page: Number(page),
    count: Number(count),
    results: [],
  };

  models.reviews.findAndCountAll({
    where: {
      product_id: Number(product_id),
    },
    include: [{
      model: models.reviewphotos,
      as: 'reviewphotos',
      separate: false,
      }],
    limit,
    offset,
  })
  .then((data) => {
    responseObj.results = data.rows;
    res.send(responseObj);
  })
  .catch((err) => {
    throw err;
  });
});

exports.getMeta = ('/reviews/meta', (req, res) => {
  const { product_id } = req.query;

  const metaData = {
    product_id,
    ratings: {},
    recommended: {0: 0},
    characteristics: {},
  };

  models.reviews.findAll({
    attributes: ['rating', 'recommend'],
    where: {
      product_id: Number(product_id),
    },
    include: [{
      model: models.reviewchars,
      as: 'reviewchars',
      include: {
        model: models.characteristics,
        as: 'char',
      },
    }],
  })
  .then((data) => {
    data.map((met) => {
      if (met.recommend) metaData.recommended[0] += 1;
      !metaData.ratings[met.rating]
        ? metaData.ratings[met.rating] = 1
          : metaData.ratings[met.rating] += 1;
      met.reviewchars.map((char) => {
        metaData.characteristics[char.char.name] = {
          id: char.char_id,
          value: char.value,
        }
      })
    });
    res.send(metaData);
  })
  .catch((err) => {
    throw err;
  });
});

exports.postReview = ('/reviews', (req, res) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = req.body;
  // yea I have no idea if this will work, but it is a problem for Monday me ~
  models.reviews.create({ product_id, rating, summary, body, recommend, name, email, photos, characteristics })
    .then((charsAdded, charRow) => {
       for (const x of characteristics) {
         models.characteristics.create({ product_id, name: x.name })
           .then((revCharsAdded, revCharsRow) => {
             models.reviewchars.create({ id, char_id: revCharsRow.char_id, review_id: charRow.review_id, value });
           })
           .catch((err) => {
            throw err;
           });
         }
       })
       .catch((err) => {
         throw err;
       });
});

exports.putHelpful = ('/reviews:review_id/helpful', (req, res) => {
  // TODO
});

exports.putReported = ('/reviews:review_id/report', (req, res) => {
  // TODO
    /* make sure to drop this table from the database! */
});

// TODO: IMPLEMENT HELPFULNESS / REPORT ROUTES

// TODO: DROP DATABASE AND FIX INCORRECTLY CAST BOOLEANS
  // * ALL REPORTED VALS HAVE BEEN SET TO TRUE :| *

// TODO: OPTIMIZATION