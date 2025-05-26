const { Router } = require('express');
const { getCategories, showNewCategoryForm, createCategory} = require('../controllers/categoryController')

const categoryRouter = Router();

categoryRouter.get('/', getCategories);
categoryRouter.get('/new', showNewCategoryForm);
categoryRouter.post('/', createCategory);

module.exports = categoryRouter;