require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // For self-signed certificates
  },
});

// Debug logging for database connection parameters
console.log('Database connection parameters:', pool.options);

// Attempt to connect to the database
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  release(); // Release the client back to the pool
});

module.exports = pool;
