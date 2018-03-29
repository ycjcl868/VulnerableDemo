const Koa = require('koa');
const md5 = require('md5');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
  const body =  ctx.request.body;
  try {
    const param = eval("("+body.param+")");
    ctx.body = param;
  } catch (e) {
    ctx.body = 'hello';
  }

});

app.listen(3000);
