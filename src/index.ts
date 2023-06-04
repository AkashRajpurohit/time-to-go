import { Hono } from 'hono';
import { appendReferrerTextToUrl } from './util';

type Bindings = {
  GO_URLS: KVNamespace;
  NOT_FOUND_REDIRECT_URL: string;
  REFERRER_TEXT: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) =>
  c.redirect('https://github.com/AkashRajpurohit/time-to-go', 307)
);

app.get('*', async (c) => {
  // Get the URL pathname as input text minus the leading "/"
  const text = new URL(c.req.url).pathname.slice(1);
  const { NOT_FOUND_REDIRECT_URL, REFERRER_TEXT } = c.env;
  const url = await c.env.GO_URLS.get(text);

  if (!url) {
    if (NOT_FOUND_REDIRECT_URL) {
      const redirectUrl = appendReferrerTextToUrl(
        NOT_FOUND_REDIRECT_URL,
        REFERRER_TEXT
      );
      return c.redirect(redirectUrl);
    }

    // NOT_FOUND_REDIRECT_URL is not configured so just return 404 response
    return c.text('Not found', 404);
  }

  const urlWithRef = appendReferrerTextToUrl(url, REFERRER_TEXT);

  return c.redirect(urlWithRef, 307);
})

export default app;
