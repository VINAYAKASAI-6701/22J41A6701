# 🔗 URL Shortener (React + Django)

A full-stack URL shortener web application built with:

- ✅ **Frontend**: React + TypeScript + Material UI  
- ✅ **Backend**: Django + Django REST Framework (DRF)  
- ✅ **Authentication**: JWT (SimpleJWT)  
- ✅ **Logging**: Middleware-based logging stored in `logs/app.log`

---

## 📁 Project Structure

22J41A6701/
│
├── backend/
│ ├── shortener/ # Django app for URL logic
│ ├── url_shortener/ # Main Django project
│ └── db.sqlite3 # SQLite DB
│
├── frontend/
│ └── url-shortener/ # React app created with CRA + TS

---

## 🚀 Features

- 🔐 JWT-based secure API endpoints
- 🧾 Logging middleware for all incoming requests
- 🔄 Automatically redirects short URLs
- 🌐 User-friendly React UI to enter and shorten links

---

## ⚙️ Setup Instructions

### 🔧 Backend (Django)

```bash
cd backend
python -m venv env
env\Scripts\activate    # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
📌 Token endpoint use in Hoppscotch
POST http://127.0.0.1:8000/api/token/
Body:
{
  "username": "<your-email>",
  "password": "<your-password>"
}
💻 Frontend (React)
cd frontend/url-shortener
npm install
npm start


🧠 Author
🔸 Roll Number: 22J41A6701

🔸 Name: VINAYAKASAI

