import express from 'express';
import path from 'path';
import routes from'./routes';
import http from 'http';
import cors from 'cors';

import { setupWebSocket } from './app/services/socket';

import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    setupWebSocket(this.server);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
