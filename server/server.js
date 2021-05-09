const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
const sequelize = require('sequelize');

const db = require('../dbConfig.js');
const initModels = require('../models/init-models');
var models = initModels(db);

app.get('/reviews', (req, res) => {
  const { product_id, page, count } = req.query;
  const limit = count ? +count : 125;
  const offset = page ? page * limit : 0;

  const responseObj = {
    product_id,
    page: Number(page),
    count: Number(count),
    results: [],
    photos: []
  };

  models.reviews.findAll({ offset, limit }, {
    where: {
      product_id: Number(product_id)
    },
  })
  .then((reviewData) => {
    Promise.all(reviewData.map((review) => {
      models.reviewphotos.findAll()
        .then((photos) => {
          responseObj = photos;
        })
    }))
    responseObj.results = reviewData;
    res.send(responseObj);
  })
  .catch((err) => {
    res.sendStatus(404);
  });
});

app.get('/reviews/meta', (req, res) => {
  const { product_id } = req.query;

  const metaData = {
    product_id,
    ratings: {},
    recommended: {0: 0},
    characteristics: {},
  };

  getCharacteristics(product_id, (data) => {
    data.rows.forEach((row) => {
      metaData.characteristics[row.name] = {
        id: row.id,
        value: 0
      };
    });
  });

  getCharacteristicData(product_id, (data) => {
    data.rows.forEach((row) => {
      metaData.characteristics[row.name].value += row.value;
    })
  });

  const queryStr =
    `SELECT rating, recommend FROM sdctables.reviews
      WHERE product_id = '${product_id}'`

    client.query(queryStr, (err, data) => {
      if (err) console.log(err);

      data.rows.forEach((row) => {
        if (row.recommend === 'true') {
          metaData.recommended[0] += 1;
        }

        !metaData.ratings[row.rating] ?
          metaData.ratings[row.rating] = 1 :
            metaData.ratings[row.rating] += 1;
      });

      res.send(metaData);
    });
});

app.post('/reviews', (req, res) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = req.body;
  const cols = [product_id, rating, summary, body, recommend, name, email, photos];
  res.send(cols)
  const queryStr = `INSERT INTO sdctables.reviews ( product_id, rating, summary, body, recommend, reviewer_name, reviewer_email, response, helpfulness, photos) VALUES (?, ?, ?, ?, ?, ?, ?, null, 0, ?)`;

  client.query(queryStr, cols, (err, data) => {
    if (err) console.log(err);

    res.send(data);
  });

});
app.put('/reviews/:review_id/helpful', (req, res) => {

});
app.put('/reviews/:review_id/report', (req, res) => {

});


module.exports = app;