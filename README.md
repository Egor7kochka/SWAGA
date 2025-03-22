
Swaga Wear - Интернет-магазин одежды
Проект представляет собой интернет-магазин одежды, разработанный на React.js (frontend) и Node.js + Express (backend) с базой данных Microsoft SQL Server.

🚀 Установка и запуск проекта
1. Клонирование репозитория
Сначала скачай код проекта:
git clone https://github.com/Egor7kochka/SWAGA.git cd SWAGA

🔹 Установка и запуск сервера (backend)
Перейди в папку backend:
cd backend 
Установи зависимости:
npm install 
Создай .env файл рядом с server.js и добавь данные для подключения к базе данных:
DB_SERVER=localhost DB_NAME=SHOP DB_USER=sa DB_PASSWORD=your_password DB_PORT=1433 
Запусти сервер:
npm start 
После этого сервер запустится на http://localhost:5000.

🔹 Установка и запуск клиента (frontend)
Перейди в папку frontend: cd ../frontend 
Установи зависимости: npm install 
Запусти React-приложение: npm start 
Теперь клиентская часть будет доступна на http://localhost:3000.

🛠 Технологии в проекте
Frontend: React.js
Backend: Node.js + Express.js
База данных: Microsoft SQL Server
Дополнительно: Axios, React Icons, Tedious (для работы с SQL Server)

📌 Основные команды
📝 Дополнительная информация
Для работы с базой данных установи Microsoft SQL Server и SQL Server Management Studio (SSMS).
Убедись, что порт 1433 открыт для подключения к SQL Server.
Если сервер не подключается, попробуй запустить SQL Server Configuration Manager и разрешить аутентификацию SQL Server.
📩 Контакты
Если возникли вопросы или баги, пиши в Issues или Pull Requests в репозитории.

