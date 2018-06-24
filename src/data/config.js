import Raven from 'raven-js';

const sentry_key = 'bb3805316cbc4969a6f3d133d80b269c';
const sentry_app = '1231668';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  window && window.console && console.error && console.error(ex);
}
