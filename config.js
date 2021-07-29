require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://od_admin:@db:5432:/questions_db`

const pool = new Pool({

  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    sslmode: 'require',
    rejectUnauthorized: false,
  }
})

module.exports = pool