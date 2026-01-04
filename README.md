# 🦊 B.E.D Stack Template (Bun + Elysia + Drizzle)

### High-performance, strictly typed backend boilerplate.

Created by [Karots](https://github.com/Adhnan23)

![Bun](https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun&logoColor=white)
![Elysia](https://img.shields.io/badge/Elysia-black?style=for-the-badge&logo=elysia)
![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![Zod](https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 📑 Table of Contents

- [Features](#-features)
- [Who is this for?](#-who-is-this-for)
- [Quick Example](#-quick-example)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Database Management](#-database-management)
- [Environment Configuration](#-environment-configuration)
- [Docker Setup](#-docker-setup)
- [Standardized Responses](#-standardized-responses)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

- **⚡ Blazing Fast:** Built on the Bun runtime for maximum speed.
- **🛡️ Type Safe:** End-to-end type safety using Zod v4 and Elysia.
- **🏗️ Clean Architecture:** Separation of concerns for Routes, Controllers, and Middlewares.
- **🗃️ Modern ORM:** Drizzle ORM with LibSQL (SQLite) for effortless database management.
- **🔌 Pre-configured Plugins:**

  - Global Error Handling (automatically handles Validation & Drizzle errors)
  - CORS (configured for flexibility)
  - Static Plugin (serves the `/public` folder)
  - Zod-based environment validation

---

## 🎯 Who is this for?

- Developers building **type-safe Bun APIs**
- Small to medium backend projects
- Projects that prioritize **speed, correctness, and clean architecture**
- Anyone who wants a ready-to-go boilerplate for **REST APIs**

---

## ⚡ Quick Example

Here’s a prebuilt `/health` API route using the `respond` utility:

```ts
import db from "@/db";
import respond from "@/utils/respond";
import Elysia from "elysia";

const ApiRoute = new Elysia({ prefix: "/api" }).get("/health", async () => {
  // Lightweight DB check; will throw if unavailable
  await db.run("SELECT 1");

  return respond(true, "Service is healthy", {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default ApiRoute;
```

> ✅ Works out-of-the-box with the global error handler
> ✅ Returns standardized JSON responses
> ✅ Can be used for **liveness probes** in production

---

## 📂 Project Structure

```text
src/
├── controllers/    # Business logic (request/response handling)
├── db/             # Database connection & migrations
│   ├── schemas/    # Drizzle schema definitions
│   ├── queries/    # Reusable database functions
│   └── migrations/ # Auto-generated migration files
├── middlewares/    # Custom plugins (CORS, Error Handler, Static)
├── routes/         # Route definitions and versioning
├── utils/          # Helpers (Zod Env parser, API response formatter)
└── index.ts        # Application entry point
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Set up environment

```bash
cp .env.example .env
```

Ensure your `DB_FILE_NAME` is set (Default: `file:./src/db/database.db`).

### 3. Initialize database

```bash
bun run db:push
```

### 4. Run development server

```bash
bun run dev
```

---

## 🗄️ Database Management

| Script              | Action                                 |
| ------------------- | -------------------------------------- |
| `bun run db:gen`    | Generate SQL migration files           |
| `bun run db:mig`    | Apply migrations to the database       |
| `bun run db:push`   | Fast-sync schema to DB (No migrations) |
| `bun run db:studio` | Open a local GUI to view your data     |

---

## 🛡️ Environment Configuration

The app will refuse to start if required `.env` variables are missing or invalid.

**Schema (`src/utils/env.ts`):**

- `ENVIRONMENT`: `development` | `production` | `test`
- `DB_FILE_NAME`: Database path (LibSQL/SQLite)
- `PORT`: Server port (automatically transformed to a number)

---

## 🐳 Docker Setup

You can run the backend using **Docker** and **Docker Compose** for easy development.

### 1️⃣ Prerequisites

- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- `.env` file configured (`PORT`, `DB_FILE_NAME`, `ENVIRONMENT`)

---

### 2️⃣ Development with Live Reload

```bash
# Build and start the container
docker-compose up --build
```

- Server runs in **watch mode** (`bun run --watch src/index.ts`)
- SQLite database persists in `./src/db`
- Access the API at: `http://localhost:${PORT}`
- Stop the server: `Ctrl+C` (or `docker-compose down`)

> The container automatically reads your `.env` file for PORT and DB_FILE_NAME.

---

### 3️⃣ Running in Detached Mode

```bash
docker-compose up --build -d
docker-compose logs -f backend
```

- `-d` runs the container in the background
- `logs -f` shows real-time output

---

## 📬 Standardized Responses

All API responses follow a consistent JSON structure via the `respond` utility:

```ts
// Success Example
{
  "success": true,
  "message": "User created",
  "data": { "id": 1, "name": "Karots" },
  "error": null
}

// Error Example
{
  "success": false,
  "message": "Validation Failed",
  "data": null,
  "error": ["email: Invalid email format"]
}
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Karots**

- Portfolio: [karots.lk](https://karots.lk)
- GitHub: [@Adhnan23](https://github.com/Adhnan23)

> If you find this template useful, feel free to give it a ⭐!
