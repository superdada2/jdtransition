import http from 'http';
import express from 'express';
import compress from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';
import expressPartils from 'express-partials';
import {sequelize} from './models'
import mysql from 'mysql';
import passport from 'passport';
import {initiate} from './routes/api/initiate'

const app = express();

app
  .set("view engine", 'ejs')
  .set('views', __dirname + '/views')
  .use(expressPartils())
  .use(compress())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(passport.initialize())
  .use('/', router)

export default app;

const server = http.createServer(app);
const port = process.env.PORT || 4040;

sequelize
  .sync()
  .then(() => {

    server
      .listen(port, function () {
        initiate()
        console.log('Server listening at port %d', port);
      })
  })