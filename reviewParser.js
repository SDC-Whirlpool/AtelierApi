const fs = require('fs');
const moment = require('moment');

/******** DATA NEEDS TO BE REWRITTEN!!! ROW[7] (REPORTED) WERE ALL SET TO 'true' *********/
/** DELETE ROW 26/27 AT SOME POINT- GLANCED OVER SOLUTION IMPLEMENTED AT ROW 16 */

const readReviews = fs.createReadStream(__dirname + '/reviews.csv', 'utf8');
const writeReviews = fs.createWriteStream(__dirname + '/noScrubs.csv');

readReviews.on('data', (chunk) => {
  const data = chunk.split(/\r\n|\n/);
  const reviews = [];

  for (let i = 0; i < data.length; i += 1) {
    let row = data[i].split(',');
    if (row[7] === 'true') continue;
    if ((row[6] && row[7]) !== ('true' || 'false')) continue;


    row[0] = Number(row[0]);
    row[1] = Number(row[1]);
    row[2] = Number(row[2]);
    row[3] = moment.unix(row[3]).format();
    let toBool = new Boolean(row[6]);
    row[6] = toBool.valueOf();
    toBool = new Boolean(row[7])
    row[7] = toBool.valueOf();
    row[11] = Number(row[11]);

    if (isNaN(row[2]) || row[2] > 10) continue;
    if (row[3] === 'Invalid date') continue;
    if (isNaN(row[11])) continue;

    reviews.push(row);
  }

  let csvContent = reviews.map(review => review.join(",")).join("\r\n");
  writeReviews.write(csvContent);
});

