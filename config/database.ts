export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: env("DATABASE_URL", ""),
    pool: { min: 2, max: 10 },
    ssl: { rejectUnauthorized: false }, // <-- AJOUTE ceci pour le déploiement
  },
});
