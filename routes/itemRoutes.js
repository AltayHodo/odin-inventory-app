const { Router } = require('express');
const { getItems } = require('../controllers/itemController');

const itemRouter = Router();

itemRouter.get('/', getItems);

module.exports = itemRouter;
