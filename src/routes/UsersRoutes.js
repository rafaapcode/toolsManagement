import Router from 'express';
import UserController from '../controllers/UsersControllers';
import { ErrorsUser } from '../middlewares/Errors.js';
import auth from '../middlewares/Auth.js';

const userRouter = new Router();

userRouter.post('/', ErrorsUser.storageUserHandling, UserController.storage);
userRouter.get('/:id', auth, ErrorsUser.getDeleteUserHandling, UserController.getUser);
userRouter.put('/:id', auth, UserController.update);
userRouter.delete('/:id', auth, ErrorsUser.getDeleteUserHandling, UserController.delete);
userRouter.post('/login', ErrorsUser.loginHandling, UserController.login);

export default userRouter;