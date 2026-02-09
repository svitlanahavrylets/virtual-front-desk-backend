# Virtual Front Desk – Backend

Backend part of the **Virtual Front Desk Programming Practice Project**.  
This project implements a simple worksheet system with session-based answers.

## Tech Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- Sequelize (latest)
- dotenv

## Features

- Session token generation
- Worksheet tasks with options
- Answer submission with session validation
- Proper HTTP status codes and edge case handling
- Database models, associations, and seed data

## Environment Variables

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

## Database Setup

1. Create PostgreSQL database manually on Render or use an existing one.

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

On startup:

- Database connection is initialized
- Model associations are set up
- Tables are synchronized
- Seed data for worksheet tasks is inserted

## API Endpoints

1. Get Session Token

**GET `/sessions`**

Generates a new session token and stores it in the database.

**Response**

```json
{
  "token": "uuid-session-token"
}
```

2️. Get Worksheet Tasks

**GET `/tasks`**

Returns all worksheet tasks with their options.

**Response**

```json
[
  {
    "id": 1,
    "instruction": "Example question",
    "options": [
      {
        "id": 1,
        "text": "Option A"
      }
    ]
  }
]
```

3️. Submit Worksheet Task Answer

**POST `/answers/:taskId`**

Stores or updates the selected answer for a given task and session.

> Requires a valid session token obtained from `/sessions`

**Headers**

```makefile
Authorization: Bearer <session_token>
```

**Body**

```json
{
  "optionId": 1
}
```

**Response**

```json
{
  "correct": true
}
```

## Error Handling

| Status | Reason                              |
| :----- | :---------------------------------- |
| 400    | Missing optionId                    |
| 401    | Missing or invalid Bearer token     |
| 401    | Session token not found             |
| 404    | Task or option not found / mismatch |
| 500    | Server error                        |

## Testing

The API can be tested using Postman or DBeaver (for DB inspection).

## Deployments

Backend is deployed on:

https://virtual-front-desk-backend-production.up.railway.app/

## Notes

This project was created as a technical practice task to demonstrate:

- Backend architecture
- REST API design
- Database modeling with Sequelize
- Edge case handling and clean code practices

## Author

Svitlana Havrylets
