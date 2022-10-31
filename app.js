import express from 'express';
import toolRouter from './src/routes/ToolsRoutes';

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
        this.app.set('port', 3000);
    }

    routes() {
        this.app.use('/tools', toolRouter)
    }

    database() {

    }
}

export default new App().app;