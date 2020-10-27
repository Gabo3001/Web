const pgp = require("pg-promise")();
const connectionString =
    "postgresql://postgres:gabo3001@localhost:5432/postgres";

const db = pgp(connectionString);

module.exports = db;