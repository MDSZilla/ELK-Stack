import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import * as http from "http";
import * as winston from "winston";

const app = express();
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({filename: "../docker/logstash/logs/testlog.log"})
    ],
    format: winston.format.combine(
        winston.format.timestamp(), winston.format.json()
    ),
});

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = 3001;

app.get('/', (req, res) => {
    logger.info("Server Running")
    res.write(`<h1>Server Running on Port : ${PORT}</h1>`);
    res.end();
});

app.get('/post', (req, res) => {
    logger.info("Post Server Running")
    res.write(`<h1>Post Server Running on Port : ${PORT}</h1>`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});