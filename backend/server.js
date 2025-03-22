
const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join('backend', '..', '.env') });

console.log("DB_SERVER:", process.env.DB_SERVER);  // Должно вывести значение из .env
console.log("DB_NAME:", process.env.DB_NAME);  // Должно вывести значение из .env

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    user: process.env.DB_USER ,  // Для Windows Authentication оставляем пустыми
    password: process.env.DB_PASSWORD,  // Для Windows Authentication оставляем пустыми
    server: process.env.DB_SERVER,  // Получаем из .env
    database: process.env.DB_NAME,  // Получаем из .env
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

// Функция проверки подключения к базе
async function testDB() {
    try {
        console.log("🟡 Попытка подключения к базе SHOP...");
        let pool = await sql.connect(dbConfig);
        console.log("✅ Успешное подключение к базе SHOP");

        let result = await pool.request().query("SELECT TOP 5 * FROM Items");
        console.log("🔹 Данные из таблицы Items:", result.recordset);
    } catch (err) {
        console.error("❌ Ошибка подключения к БД:", err.message);
    }
}
console.log("🔹 Запускаем проверку подключения к базе");
testDB(); // Запускаем проверку подключения к базе

// Маршрут для получения списка товаров
app.get("/items", async (req, res) => {
    console.log("🟢 Запрос на /items получен");
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query("SELECT * FROM Items");
        res.json(result.recordset);
    } catch (err) {
        console.error("❌ Ошибка при запросе данных:", err.message);
        res.status(500).send(err.message);
    }
});
app.get("/categories", async (req, res) => {
    console.log("🟢 Запрос на /categories получен");
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query("SELECT DISTINCT Category FROM Items"); // Берём уникальные категории из Items
        res.json(result.recordset);
        console.log("🔹 Категории из БД:", result.recordset);
    } catch (err) {
        console.error("❌ Ошибка при запросе категорий:", err.message);
        res.status(500).send(err.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));