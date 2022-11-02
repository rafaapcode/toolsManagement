import Router from 'express';
import ToolsControler from '../controllers/ToolsControllers.js';
import { ErrorsTools } from '../middlewares/Errors.js';
import auth from '../middlewares/Auth.js';

const toolRouter = new Router();

toolRouter.get('/', ToolsControler.getAll);
toolRouter.get('/:tag', ErrorsTools.getErrorgHandling, ToolsControler.get);
toolRouter.post('/', auth, ErrorsTools.storageErrorgHandling, ToolsControler.storage);
toolRouter.delete('/:id', auth, ErrorsTools.deleteErrorgHandling, ToolsControler.delete);
toolRouter.put('/addTag/:id', auth, ErrorsTools.updateErrorgHandling, ToolsControler.updatedTags);

export default toolRouter;