const { Router } = require('express');
const { getItems, showNewItemForm, createItem, deleteItem, showEditForm, updateItem } = require('../controllers/itemController');

const itemRouter = Router();

itemRouter.get('/new', showNewItemForm);   
itemRouter.post('/', createItem);     
itemRouter.get('/:id/edit', showEditForm);
itemRouter.put('/:id', updateItem);
itemRouter.delete('/:id', deleteItem);     
itemRouter.get('/', getItems);            

module.exports = itemRouter;
