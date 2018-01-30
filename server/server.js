const Koa = require('koa');
const app = new Koa();
var Router = require('koa-router');
var router = new Router();

const routes = require('./routes/');
const koaBody = require('koa-body');
const db = require('./db/mongo')
db(app);

app.use(koaBody());
routes(app);

app.listen(3004, () => {
  console.log(`Dev Server hosting on port: 3004`);
});

// module.exports = app