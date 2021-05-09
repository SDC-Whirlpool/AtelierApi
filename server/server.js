const express = require('express');
const app = express();

/* ROUTES ARE DEFINED IN '../routes/reviews' */
const reviews = require('../routes/reviews');

app.use(express.json());

app.get('/reviews', reviews.getReviews);

app.get('/reviews/meta', reviews.getMeta);

app.post('/reviews', reviews.postReview);

app.put('/reviews/:review_id/helpful', reviews.putHelpful);

app.put('/reviews/:review_id/reported', reviews.putReported);


module.exports = app;