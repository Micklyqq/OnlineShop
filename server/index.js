require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors"); // нужен для запросов из браузера
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000; // Получаем порт из переменных окружения

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", router);

// Обработка ошибок, последний Middleware(ставим последним тк в случае если на предыдущих middleware будет ошибка, то express вызывает последний middleware)
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
