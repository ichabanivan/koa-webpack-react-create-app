const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');

const routes = require('./routes/');
const db = require('./db/mongo')

const router = new Router();
const app = new Koa();

app.use(koaBody());
db(app);
routes(app);

app.listen(3004, () => {
  console.log(`Dev Server hosting on port: 3004`);
});
