require("dotenv").config;
const express = require("express");

const PORT = process.env.PORT || 5000; // Получаем порт из переменных окружения

const app = express();

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
