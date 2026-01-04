# 🦊 B.E.D Stack Template (Bun + Elysia + Drizzle)
### High-performance, strictly typed backend boilerplate.
Created by [Karots](https://github.com/Adhnan23)

![Bun](https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun&logoColor=white)
![Elysia](https://img.shields.io/badge/Elysia-black?style=for-the-badge&logo=elysia)
![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![Zod](https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod&logoColor=white)

---

## 📑 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Database Management](#-database-management)
- [Environment Configuration](#-environment-configuration)
- [Standardized Responses](#-standardized-responses)

---

## ✨ Features

- **⚡ Blazing Fast:** Built on the Bun runtime for maximum speed.
- **🛡️ Type Safe:** End-to-end type safety using Zod v4 and Elysia.
- **🏗️ Clean Architecture:** Separation of concerns (Routes, Controllers, Middlewares).
- **🗃️ Modern ORM:** Drizzle ORM with LibSQL (SQLite) for effortless DB management.
- **🔌 Pre-configured Plugins:** - Global Error Handling (handles Validation & Drizzle errors automatically).
    - CORS (configured for flexibility).
    - Static Plugin (serves the `/public` folder).
    - Zod-based Environment validation.

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

### 1. Installation

```bash
bun install
```

### 2. Set up Environment

```bash
cp .env.example .env
```

Ensure your `DB_FILE_NAME` is set (Default: `file:./src/db/database.db`).

### 3. Initialize Database

```bash
bun run db:push
```

### 4. Run Development

```bash
bun run dev
```

---

## 🗄️ Database Management

| Script | Action |
| --- | --- |
| `bun run db:gen` | Generate SQL migration files |
| `bun run db:mig` | Apply migrations to the database |
| `bun run db:push` | Fast-sync schema to DB (No migrations) |
| `bun run db:studio` | Open a local GUI to view your data |
---

## 🛡️ Environment Configuration

The app will refuse to start if `.env` variables are missing or invalid.
**Schema (`src/utils/env.ts`):**

* `ENVIRONMENT`: `development` | `production` | `test`
* `DB_FILE_NAME`: Database path (LibSQL/SQLite)
* `PORT`: Server port (automatically transformed to a number)

---

## 📬 Standardized Responses

All API responses follow a consistent JSON structure via the `respond` utility:

```typescript
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

This project is [MIT](https://www.google.com/search?q=LICENSE) licensed.