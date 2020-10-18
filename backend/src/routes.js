import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import CollectorController from './app/controllers/CollectorController';
import SessionController from './app/controllers/SessionController';
import SearchController from './app/controllers/SearchController';
import FileController from './app/controllers/FileController';

import aws from './app/services/aws_sms';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/forgot', aws.send);

routes.post('/users', UserController.store);
routes.post('/collectors', CollectorController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.get('/collectors', CollectorController.index);
routes.put('/collectors', CollectorController.update);
routes.post('/search', SearchController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;