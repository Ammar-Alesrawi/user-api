# User API

A simple REST API built with Node.js, Express, and Prisma to manage users (CRUD + Auth).

## Features
- Register / Login with JWT
- Secure password hashing with bcrypt
- Protected routes using middleware
- PostgreSQL + Prisma ORM

## Setup
```bash
npm install
npx prisma migrate dev
npm run dev
