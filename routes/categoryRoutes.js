const { Router } = require('express');
const {
  getCategories,
  showNewCategoryForm,
  createCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', getCategories);
categoryRouter.get('/new', showNewCategoryForm);
categoryRouter.delete('/:id', deleteCategory);
categoryRouter.post('/', createCategory);

module.exports = categoryRouter;
