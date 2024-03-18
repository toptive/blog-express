const express = require('express');
const bodyParser = require('body-parser');
const { posts } = require('./models');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const allPosts = await posts.findAll();
  res.render('index', { posts: allPosts });
});

const init = async () => {
  await require('./models').sequelize.sync();
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
};

init();
