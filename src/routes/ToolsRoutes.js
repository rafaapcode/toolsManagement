import Router from 'express';
import ToolController from '../controllers/ToolsController';

const toolRouter = new Router();

toolRouter.get('/', ToolController.list);

export default toolRouter;