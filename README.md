# 🏢 Society Maintenance Tracker

A full-stack Society Maintenance Tracker developed using the MERN stack. The project helps residents raise complaints, allows administrators to manage complaint resolution, publish notices, and monitor society activities through a secure role-based system.

---

## 🌐 Live Demo

### Link (Vercel)
https://society-maintenance-tracker-xbwv.vercel.app

---

# 📌 Features

### Authentication
- Resident & Admin Registration
- Secure Login using JWT
- Password Hashing with bcrypt
- Protected Routes
- Role-Based Authorization

### Society Management
- Create Society
- Get Society Details

### Flat Management
- Create Flats
- View Flats

### Complaint Management
- Create Complaint
- Upload Complaint Image (Cloudinary)
- Complaint Priority (Low, Medium, High)
- Complaint Status Updates
- Complaint History Tracking
- Overdue Complaint Detection
- Dashboard Report

### Notice Board
- Create Notices
- Pin Important Notices
- View Society Notices

### Email Notifications
- Complaint Status Update Emails
- Important Notice Emails
- Gmail SMTP Integration using Nodemailer

---

# 🛠 Tech Stack

## Frontend
- Html
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Cloud Services
- Cloudinary
- Render
- Vercel

## Authentication
- JWT
- bcryptjs

## Other Libraries
- Multer
- Nodemailer
- dotenv
- CORS

---

# 🏗 Project Architecture

```
Frontend (HTML)
        │
        ▼
Backend API (Express + Node.js)
        │
        ├──────── JWT Authentication
        ├──────── Complaint APIs
        ├──────── Notice APIs
        ├──────── Flat APIs
        ├──────── Society APIs
        │
        ▼
MongoDB Atlas

Complaint Images
        │
        ▼
Cloudinary

Email Notifications
        │
        ▼
Gmail SMTP (Nodemailer)
```

---

# 📂 Project Structure

```
Society-Maintenance-Tracker
│
├── frontend
│   ├── html
│   
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── uploads
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── README.md
├── SYSTEM_DESIGN.pdf
└── Postman Collection.json
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# 🚀 Backend Setup

```bash
git clone https://github.com/VANSHKALRA88/Society-maintenance-tracker.git

cd Society-maintenance-tracker

cd server

npm install

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📮 API Modules

### Authentication

- Register User
- Login User
- Get Profile

### Society

- Create Society
- Get Society

### Flats

- Create Flat
- Get Flats

### Complaints

- Create Complaint
- Get Complaints
- Update Complaint Status
- Dashboard Report

### Notice Board

- Create Notice
- Get Notices

---

# ☁ Deployment

## Frontend

Vercel

https://society-maintenance-tracker-xbwv.vercel.app

---

## Backend

Render

https://society-maintenance-tracker-jgmu.onrender.com

---

## Database

MongoDB Atlas

---

## Image Storage

Cloudinary

---

# 📧 Email Integration

Email notifications are automatically sent for:

- Complaint Status Updates
- Important Society Notices

Implemented using:

- Nodemailer
- Gmail SMTP
- Gmail App Password

---

# 📄 Documentation

The repository includes:

- README.md
- SYSTEM_DESIGN.pdf
- Postman Collection (JSON)

---

# 👨‍💻 Developer

**Vansh Kalra**

GitHub:
https://github.com/VANSHKALRA88
