import { Hono } from 'hono';
import { appendReferrerTextToUrl } from './util';

type Bindings = {
  GO_URLS: KVNamespace;
  NOT_FOUND_REDIRECT_URL: string;
  REFERRER_TEXT: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) =>
  c.redirect('https://github.com/AkashRajpurohit/time-to-go')
);

app.get('/:text', async (c) => {
  const text = c.req.param('text');
  const { NOT_FOUND_REDIRECT_URL, REFERRER_TEXT } = c.env;
  const url = await c.env.GO_URLS.get(text);

  if (!url) {
    const redirectUrl = appendReferrerTextToUrl(
      NOT_FOUND_REDIRECT_URL,
      REFERRER_TEXT
    );
    return c.redirect(redirectUrl);
  }

  const urlWithRef = appendReferrerTextToUrl(url, REFERRER_TEXT);

  return c.redirect(urlWithRef, 307);
});

app.notFound((c) => {
  const { NOT_FOUND_REDIRECT_URL, REFERRER_TEXT } = c.env;
  if (NOT_FOUND_REDIRECT_URL) {
    const redirectUrl = appendReferrerTextToUrl(
      NOT_FOUND_REDIRECT_URL,
      REFERRER_TEXT
    );
    return c.redirect(redirectUrl);
  }

  return c.text('URL not found', 404)
});

export default app;
