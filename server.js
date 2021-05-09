// const { Pool, Client } = require('pg');
const app = require('./index.js')
app.use(express.json());
const db = require('./models');


// const pool = new Pool({
//   user: 'ambermorris',
//   host: 'localhost',
//   database: 'sdc',
//   password: '',
//   port: 5432,
// });

// pool.connect((err, client, done) => {
//   if (err) console.log(err);
//   app.listen(3000, () => {
//     console.log('listening on 3000');
//   });
// })

// const client = new Client({
//   user: 'ambermorris',
//   host: 'localhost',
//   database: 'sdc',
//   password: '',
//   port: 5432,
// });
// client.connect();

const getPhotos = (id, callback) => {
  const queryStr =
    `SELECT url FROM sdctables.reviewphotos
     WHERE review_id = ${id}`;

  client.query(queryStr, (err, data) => {
    return callback(data);
  });
}
const getCharacteristics = (id, callback) => {
  const queryStr =
    ` SELECT id, name FROM sdctables.characteristics WHERE product_id = ${id}`;

  client.query(queryStr, (err, data) => {
    return callback(data);
  });
}
const getCharacteristicData = (id, callback) => {
  const queryStr =
    `SELECT name, value FROM sdctables.reviewchars r
     INNER JOIN sdctables.characteristics c
     ON r.characteristic_id = c.id
     WHERE c.product_id = ${id}`;

  client.query(queryStr, (err, data) => {
    return callback(data);
  });
}

