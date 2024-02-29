const { JWT_SECRET = "dev-key" } = process.env;
const DB_ADDRESS_DEV = "mongodb://127.0.0.1:27017/newsapp_db";

module.exports = {
  JWT_SECRET,
  DB_ADDRESS_DEV,
};
