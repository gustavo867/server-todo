import path from "path";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/v1/database/db.sqlite",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "v1", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "seed"),
    },
    useNullAsDefault: true,
  },
};
