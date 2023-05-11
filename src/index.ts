import { Hono } from 'hono';

type Bindings = {
  GO_URLS: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) =>
  c.redirect('https://akashrajpurohit.com/?ref=go.akashrajpurohit.com')
);

app.get('/:text', async (c) => {
  const text = c.req.param('text');
  const url = await c.env.GO_URLS.get(text);

  if (!url) {
    return c.redirect('https://akashrajpurohit.com/404/?ref=go.akashrajpurohit.com');
  }
  
  const uri = new URL(url);
  uri.searchParams.append('ref', 'go.akashrajpurohit.com');
  const urlWithRef = uri.toString();

  return c.redirect(urlWithRef, 307);
});

export default app;
