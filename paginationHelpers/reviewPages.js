const db = require('../dbConfig.js');

const getPagination = (page, size, callback) => {
 

  return callback({ limit, offset });
};

const getPageData = (data, page, limit) => {
  const { count: totalItems, rows: reviews } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, reviews, totalPages, currentPage };
}

module.exports = { getPagination, getPageData };