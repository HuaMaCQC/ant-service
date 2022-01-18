const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
const adduser  = require('./adduser_controller');


router.post('/adduser', async (ctx) => {
    await adduser.create(ctx); //導向控制器 
});
app.use(router.routes());
app.listen(3000);
    
