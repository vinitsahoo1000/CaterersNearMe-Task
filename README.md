# Caterers Near Me - Developer Assignment

## Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* Zod Validation

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

---

## Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Run development server:

```bash
npm run dev
```

Backend will start on:

```text
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run development server:

```bash
npm run dev
```

Frontend will start on:

```text
http://localhost:3000
```

---

## API Endpoints

### Get All Caterers

```http
GET /api/caterers
```

### Get Caterer By ID

```http
GET /api/caterers/:id
```

### Create Caterer

```http
POST /api/caterers
```

Request Body:

```json
{
  "name": "Royal Caterers",
  "location": "Mumbai",
  "pricePerPlate": 500,
  "cuisines": ["North Indian", "Chinese"],
  "rating": 4.5
}
```

---

## Features

* View caterers
* Search caterers by name
* Filter caterers by price per plate
* Responsive UI
* REST API integration
* MongoDB database storage
