import express from 'express';
import toolRouter from './src/routes/ToolsRoutes';
import userRouter from './src/routes/UsersRoutes';
import mongoose from 'mongoose';
import helmet from 'helmet';
import expressUi from 'swagger-ui-express';
import swaggerOptions from './swagger.json';
import dotenv from 'dotenv';

dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
        this.database();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.set('port', 3000);
    }

    routes() {
        this.app.use('/tools', toolRouter);
        this.app.use('/users', userRouter);
        this.app.use('/docs', expressUi.serve, expressUi.setup(swaggerOptions));
    }

    database() {
        mongoose.connect(process.env.DATABASE_URL);
    }
}
export default new App().app;
