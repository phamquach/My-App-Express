import express from 'express';
import * as homeController from '../controllers/homeController.js';

const router = express.Router();
export const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/admin',homeController.getAdminPage)
    return app.use('/', router);
};
