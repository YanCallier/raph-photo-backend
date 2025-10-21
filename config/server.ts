export default ({ env }) => ({
  url: env("PUBLIC_URL", ""), // on mettra l’URL Render après déploiement
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: { keys: env.array("APP_KEYS") },
});
