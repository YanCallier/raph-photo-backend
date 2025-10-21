export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: env("DATABASE_URL", ""),
    pool: { min: 2, max: 10 },
    // Render fournit un certificat, mais en interne (Internal URL) on peut rester sans SSL.
    // Si tu utilises l'External URL (SSL), décommente :
    // ssl: { rejectUnauthorized: false },
  },
});
