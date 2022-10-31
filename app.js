import express from 'express';
import toolRouter from './src/routes/ToolsRoutes';

class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use('/tools', toolRouter);
    }
}

export default new App().app;