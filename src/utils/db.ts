import { Pool } from "pg";
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "medicala12",
  port: 5432,
});

export default db;
