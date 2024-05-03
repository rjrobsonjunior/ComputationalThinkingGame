const { Pool } = require('pg');
const dotenv = require('dotenv');
const { connectionString } = require('pg/lib/defaults');
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
    
});
console.log(pool)

module.exports = pool;