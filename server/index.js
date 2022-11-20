const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// build in middleware
app.use(cors());
app.use(express.json());



