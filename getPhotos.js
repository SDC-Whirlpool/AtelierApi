/* interesting function written by tre, just holding this here to examine more later .. :) */

// var Sequelize = require('sequelize');
// var db = new Sequelize('chat', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
// var User = db.define('User', {
//   username: Sequelize.STRING
// });
// var Message = db.define('Message', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });
// User.hasMany(Message, {foreignKey: 'userid'});
// Message.belongsTo(User, {foreignKey: 'userid'});
// Message.sync()
//   .then(() => {
//     return Message.create({
//       userid: 1,
//       text: 'This is a test.',
//       roomname: 'main'
//     })
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .then(() => {
//     return User.sync()
//     .then(function() {
//       return User.create({username: 'Jean Valjean'});
//     })
//     .then(function() {
//       return User.findAll({ where: {username: 'Jean Valjean'}, include: [Message]});
//     })
//     .then(function(users) {
//       console.log(users);
//       users.forEach(function(user) {
//         console.log(user.username + ' exists');
//       });
//       db.close();
//     })
//     .catch(function(err) {
//       console.error(err);
//       db.close();
//     });
//   })