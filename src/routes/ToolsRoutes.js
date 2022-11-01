import Router from 'express';
import ToolsControler from '../controllers/ToolsControllers.js';
import { ErrorsTools } from '../middlewares/Errors.js';


const toolRouter = new Router();

toolRouter.get('/', ToolsControler.getAll);
toolRouter.get('/:tag', ErrorsTools.getErrorgHandling, ToolsControler.get);
toolRouter.post('/', ErrorsTools.storageErrorgHandling, ToolsControler.storage);
toolRouter.delete('/:id', ErrorsTools.deleteErrorgHandling, ToolsControler.delete);

export default toolRouter;