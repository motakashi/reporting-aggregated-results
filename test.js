const db = require('./models/index');

db.movies.findAll().then(movie => {
  console.log(movie[0].dataValues);
}).catch(e => {
  console.log(e);
})

