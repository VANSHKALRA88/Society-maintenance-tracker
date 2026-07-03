# Society Maintenance Tracker Backend

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Features

- User Authentication
- Society Management
- Flat Management
- Complaint Management
- Complaint Status History
- Overdue Detection
- Dashboard Reporting
- Notice Board
- Photo Upload (Pending)

---

## Database Collections

- Users
- Societies
- Flats
- Complaints
- Notices

### Relationships

- One Society → Many Flats
- One Flat → Many Complaints
- One Society → Many Notices
- One User → Many Complaints

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login user |

---

### Society

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/society/create | Create Society |
| GET | /api/society/all | Get All Societies |

---

### Flat

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/flats/create | Create Flat |
| GET | /api/flats/:societyId | Get Flats of Society |

---

### Complaint

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/complaints/create | Create Complaint |
| GET | /api/complaints/:societyId | Get All Complaints |
| PUT | /api/complaints/update-status/:complaintId | Update Complaint Status |
| GET | /api/complaints/dashboard/:societyId | Complaint Dashboard |

---

### Notice Board

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/notices/create | Create Notice |
| GET | /api/notices/:societyId | Get All Notices |


### Auth
...

### Society
...

### Flat
...

### Complaint
...

### Notice
...

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to server folder

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

Run the server

```bash
npm run dev
```

## Project Structure

```
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── uploads/
├── utils/
│
├── app.js
├── server.js
├── package.json
└── README.md
```

## Environment Variables

...
