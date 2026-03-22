# Computational Thinking Game

Interactive learning platform for teaching programming with integrated code editor, structured courses, and theoretical/practical quizzes.

**Academic Project** - Course: Algorithm Design and Analysis (UTFPR)

## Features

- User authentication with JWT
- Course catalog and theoretical content
- Integrated code editor with Monaco Editor
- Theoretical and practical quizzes
- Progress tracking
- PostgreSQL database

## Tech Stack

**Frontend:** React 18, React Router, Monaco Editor, Bootstrap  
**Backend:** Node.js, Express, PostgreSQL  
**Authentication:** JWT with bcrypt

## Installation

### Backend
```bash
cd server
npm install
npm start
``` 

### Frontend
```bash
cd client
npm install
npm start
```

**Prerequisites:** Node.js and PostgreSQL configured

## Environment Variables

Configure a `.env` file in the `server/` directory with your PostgreSQL credentials and JWT_SECRET.
