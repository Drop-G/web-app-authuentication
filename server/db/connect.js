const { Pool } = require('pg');

const pool = new Pool({
  user: 'tedpeters',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'auth_user'
});

module.exports = { pool };
