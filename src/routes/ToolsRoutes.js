import Router from 'express';
import ToolsControler from '../controllers/ToolsControllers.js';

const toolRouter = new Router();

toolRouter.get('/', ToolsControler.getAll);
toolRouter.get('/:tag', ToolsControler.get);
toolRouter.post('/', ToolsControler.storage);
toolRouter.delete('/:id', ToolsControler.delete);

export default toolRouter;