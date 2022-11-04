import Router from 'express';
import UserController from '../controllers/UsersControllers';
import { ErrorsUser } from '../middlewares/Errors.js';
import auth from '../middlewares/Auth.js';

const userRouter = new Router();

userRouter.post('/', ErrorsUser.storageUserHandling, UserController.storage);
userRouter.get('/', auth, UserController.getUser);
userRouter.put('/', auth, UserController.update);
userRouter.delete('/', auth, UserController.delete);
userRouter.post('/login', ErrorsUser.loginHandling, UserController.login);

export default userRouter;