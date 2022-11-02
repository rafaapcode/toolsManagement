import Router from 'express';
import UserController from '../controllers/UsersControllers';
import { ErrorsUser } from '../middlewares/Errors.js';

const userRouter = new Router();

userRouter.post('/', ErrorsUser.storageUserHandling, UserController.storage);
userRouter.get('/:id', ErrorsUser.getDeleteUserHandling, UserController.getUser);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', ErrorsUser.getDeleteUserHandling, UserController.delete);

export default userRouter;