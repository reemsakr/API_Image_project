// import exp from 'constants'
import express from 'express';
//import { request } from 'http'
import images from './api/images';

// root route
const routes = express.Router();
// endpoint
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('welcome to Image processing API application.');
});
//path to images as a midleware
routes.use('/images', images);

export default routes;
