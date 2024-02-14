import db from "./db";

const queryModelFunction = async (query: any, input?: any) => {
  const client = await db.connect();
  try {
    if (input) {
      const result = await client.query(query, input);
      return result.rows[0];
    } else {
      const result = await client.query(query);
      return result.rows[0];
    }
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    throw error;
  } finally {
    client.release();
  }
};

export default queryModelFunction;
