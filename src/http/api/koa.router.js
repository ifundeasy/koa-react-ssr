import Router from '@koa/router';
import flattenNestedObj from '../../util/flatten-obj'

const router = new Router();

router.get('/api/v1', async (ctx) => {
  const data = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 4,
        },
      },
    },
  }

  ctx.set('Content-Type', 'application/json');
  ctx.body = {
    message: 'Hello Api!',
    data: flattenNestedObj(data),
  };
});

export default router
