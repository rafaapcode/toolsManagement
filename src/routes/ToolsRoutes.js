import Router from 'express';
import { ToolsControler } from '../controllers/ToolsControllers.js';

const toolRouter = new Router();

toolRouter.get('/', ToolsControler.storage);

export default toolRouter;