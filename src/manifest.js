/* eslint-disable import/no-extraneous-dependencies */

import Koa from 'koa';
import Router from '@koa/router';
import http from 'http';
// import serve from 'koa-static';
import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import Main from './frontend/pages/Main';

const router = new Router();
const app = new Koa();

router.get('/(.*)', async (ctx) => {
  let didError = false;

  try {
    // Wraps into a promise to force Koa to wait for the render to finish
    return new Promise((_resolve, reject) => {
      const entryPoint = ['/bundle.js'];
      const errorExample = new Error('Is this error?');
      const { pipe, abort } = renderToPipeableStream(
        <StaticRouter location={ctx.request.url}>
          <Main locals={{
            url: ctx.request.url,
            method: ctx.request.method,
            params: ctx.params,
            query: ctx.query,
            body: ctx.request.body,
            error: {
              code: errorExample.code,
              message: errorExample.message,
            },
            _: { now: new Date() },
          }}
          />
        </StaticRouter>,
        {
          // bootstrapScripts: entryPoint,
          onAllReady() {
            ctx.status = didError ? 500 : 200;
            ctx.set('Content-Type', 'text/html');
            pipe(ctx.res);
          },
          onShellError() {
            ctx.status = 500;
            abort();
            didError = true;
            ctx.set('Content-Type', 'text/html');
            ctx.body = '<!doctype html><p>Loading...</p>';
            // ctx.body = '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>';
            reject();
          },
          onError(error) {
            didError = true;
            console.error(error);
            reject();
          },
        },
      );
      setTimeout(() => abort, 10_000);
    })
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = 'Internal Server Error';
    return false
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
