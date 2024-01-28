import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import Api from './api/koa.router';
import React from './react/koa.router';

const app = new Koa();
const assetdir = path.join(__dirname, '..', '..', 'dist', 'asset')

// asset public dir as routes
app.use(mount('/asset', serve(assetdir)))

// api routes
app.use(Api.routes())
app.use(Api.allowedMethods())

// reactjs ssr routes
app.use(React.routes())
app.use(React.allowedMethods())

export default app
