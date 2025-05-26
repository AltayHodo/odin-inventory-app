const express = require('express');
const app = express();
const path = require('path');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const itemRouter = require('./routes/itemRoutes');
const categoryRouter = require('./routes/categoryRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/items', itemRouter);
app.use('/categories', categoryRouter);

app.get('/', (req, res) => {
  res.redirect('/categories');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
