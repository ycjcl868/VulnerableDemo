

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import session from 'koa-session';
import views from 'koa-views';
import path from 'path';

const router = new Router();
const app = new Koa();
app.keys = ['666'];
app.use(views(path.join(__dirname, './view'), {
  extension: 'html'
}))


app.use(bodyParser());
app.use(session(app));
app.use(router.routes());

router.get('/', async (ctx, next) => {
    await ctx.render('index');
  })
router.get('/image', async (ctx, next) => {
      // generate 4 digit random number
      ctx.session.code = Math.floor(1000 + Math.random() * 9000)+'';
      console.log('--ctx.session.code--', ctx.session.code);
  })

router.post('/login', async (ctx, next) => {
    try {
      const code = ctx.request.body.code;
      console.log('-session.code, code--', ctx.session.code, code, ctx.session.code && code === ctx.session.code);
      if (ctx.session.code && code === ctx.session.code) {
        ctx.body = 'flag{6666}';
      } else {
        ctx.body = 'nono';
      }
    } catch (e) {
      ctx.body = 'please input code...';
    }

  })

app.listen(3000);
