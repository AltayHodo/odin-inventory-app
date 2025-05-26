const { Router } = require('express');
const { getItems, showNewItemForm, createItem } = require('../controllers/itemController');

const itemRouter = Router();

itemRouter.get('/new', showNewItemForm);   
itemRouter.post('/', createItem);          
itemRouter.get('/', getItems);            

module.exports = itemRouter;
