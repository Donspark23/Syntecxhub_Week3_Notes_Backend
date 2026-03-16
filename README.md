# Advanced Notes API

![GitHub stars](https://img.shields.io/github/stars/Donspark23/Syntecxhub_Week3_Notes_Backend)
![GitHub forks](https://img.shields.io/github/forks/Donspark23/Syntecxhub_Week3_Notes_Backend)

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

A production-style backend REST API built with **Node.js, Express, and MongoDB**.

This project was developed during the **Syntecxhub Backend Development Internship – Week 3** and combines three backend tasks into one scalable API:

• Notes Management API  
• Data Analytics API  
• Full-Text Search API  

---

# Features

### Authentication

- User registration
- Secure login with JWT
- Protected routes

### Notes Management

- Create notes
- Read notes
- Update notes
- Soft delete (archive)
- Notes linked to specific users
- Populate user details

### Search API

- Full-text search on notes
- Search by title or content

Example:

GET /api/notes/search?q=javascript


### Analytics API

MongoDB aggregation endpoints for data insights.

Examples:

GET /api/analytics/category GET /api/analytics/monthly


---

# Tech Stack

Backend:
- Node.js
- Express.js

Database:
- MongoDB
- Mongoose

Authentication:
- JWT
- bcrypt

Deployment:
- Render

---

# Project Structure
Syntecxhub_Advanced_Notes_API │ ├── config │   └── db.js │ ├── controllers │   ├── authController.js │   ├── noteController.js │   └── analyticsController.js │ ├── middleware │   └── authMiddleware.js │ ├── models │   ├── userModel.js │   └── noteModel.js │ ├── routes │   ├── authRoutes.js │   ├── noteRoutes.js │   └── analyticsRoutes.js │ ├── server.js └── README.md


---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|------|------|------|
POST | /api/auth/register | Register new user |
POST | /api/auth/login | Login user |

---

## Notes

| Method | Endpoint | Description |
|------|------|------|
POST | /api/notes | Create note |
GET | /api/notes | Get user notes |
GET | /api/notes/:id | Get single note |
PUT | /api/notes/:id | Update note |
DELETE | /api/notes/:id | Archive note |

---

## Search

| Method | Endpoint |
|------|------|
GET | /api/notes/search?q=keyword |

---

## Analytics

| Method | Endpoint | Description |
|------|------|------|
GET | /api/analytics/category | Notes per category |
GET | /api/analytics/monthly | Notes per month |

---

# API Documentation

Base URL

http://localhost:5000

OR

https://your-api-name.onrender.com

Example 1 — Register User

Request


POST /api/auth/register

Body:

Json

{
 "name": "Uchenna",
 "email": "uchenna@test.com",
 "password": "123456"
}

Response

Json

{
 "_id": "65f34bc2121",
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Example 2 — Login

Request


POST /api/auth/login

Body

Json


{
 "email": "uchenna@test.com",
 "password": "123456"
}

Response

Json


{
 "token": "JWT_TOKEN"
}

Example 3 — Create Note

Request


POST /api/notes

Headers


Authorization: Bearer TOKEN

Body

Json


{
 "title": "Learning MongoDB",
 "content": "Practicing backend development",
 "category": "programming"
}

Example 4 — Search Notes

Request


GET /api/notes/search?q=mongodb

Response

Json


[
 {
  "title": "Learning MongoDB",
  "content": "Practicing backend development"
 }
]

Example 5 — Analytics

Request


GET /api/analytics/category

Response

Json


[
 {
  "_id": "programming",
  "total": 5
 },
 {
  "_id": "personal",
  "total": 2
 }
]

---

## Live API Documentation

Interactive documentation:

https://your-api-url.onrender.com/api-docs

---

# Installation

Clone repository

git clone https://github.com/Donspark23/rep-name.git⁠�


Install dependencies

npm install


Run development server

npm run dev


---

# Environment Variables

Create `.env` file.

MONGO_URI=your_mongodb_connection JWT_SECRET=your_secret_key
---

# Example Request

Create Note

POST /api/notes


Body

{ "title": "Learning Node", "content": "Building my first API", "category": "programming" }

---

# Deployment

The project can be deployed on:

- Render
- Railway
- Vercel (serverless)
- DigitalOcean

---

# Author

**Uchenna Chidera Onyesom**

Backend Developer  
Frontend Developer  

LinkedIn:
https://www.linkedin.com/in/uchenna-chidera-onyesom-72b973345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

---

# Live API

Base URL


https://your-api.onrender.com

Test endpoints using Postman or any API client.

---

# License

MIT License
