import Router from 'express';
import UserController from '../controllers/UsersControllers';

const userRouter = new Router();

userRouter.get('/', UserController.get);

export default userRouter;