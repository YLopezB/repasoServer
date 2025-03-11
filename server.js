import express from "express";
import 'dotenv/config.js'
import './config/database.js'

const server = express();
const PORT = process.env.PORT;