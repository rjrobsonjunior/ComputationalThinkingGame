const { Pool } = require('pg');

const pool = new Pool({
    user: 'ffnpdtfw',
    password: '0iPe15Cdi7YahH4npi3LpFgM_SRUmjxr',
    host: 'motty.db.elephantsql.com',
    port: 5432,
    database: 'PETcode'
});

module.exports = pool;
