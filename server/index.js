// Express Application setup
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require('https');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: "5432"
});

const privateKey1 = fs.readFileSync('/etc/letsencrypt/live/grance.hackerclass.ru/privkey.pem', 'utf8');
const certificate1 = fs.readFileSync('/etc/letsencrypt/live/grance.hackerclass.ru/cert.pem', 'utf8');
const ca1 = fs.readFileSync('/etc/letsencrypt/live/grance.hackerclass.ru/chain.pem', 'utf8');

const credentials1 = {
	key: privateKey1,
	cert: certificate1,
	ca: ca1
};

const httpsServer = https.createServer(credentials1, app);

pgClient.on("connect", client => {
  client
    .query("CREATE TABLE IF NOT EXISTS my_comments_table (id SERIAL PRIMARY KEY, name VARCHAR(64), message VARCHAR(255), time VARCHAR(64))")
    .catch(err => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

// get the comments
app.get("/comment", async (req, res) => {
  const comments = await pgClient.query(`SELECT * FROM my_comments_table`)
  res.json(comments.rows)
  console.log("Got Comments")
});

// now the post -> insert comment
app.post("/comment", async (req, res) => {
  const {name, message} = req.body
  const newComment = await pgClient.query(`INSERT INTO my_comments_table (name, message, time) values ($1, $2, to_char(current_timestamp, 'DD Month YYYY  HH24:MI')) RETURNING *`, [name, message])
  res.json(newComment.rows[0])
  console.log("Create Comment")
});

httpsServer.listen(5000, () => {
  console.log('HTTPS Server running on port 5000');
});