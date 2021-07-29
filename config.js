require('dotenv').config()

const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? "postgres://afuxtawmyieyjo:13bb8d5ece25a9242c5ca5f55001027d17f329cfd3a91cecf780c5024e0239a4@ec2-3-237-55-96.compute-1.amazonaws.com:5432/d9aqkclakvsmeg" : connectionString
})

module.exports = pool