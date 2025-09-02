import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://641bd0f33218496ff65f31ab9077d9e7@o4509904928571392.ingest.de.sentry.io/4509904931520592",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
