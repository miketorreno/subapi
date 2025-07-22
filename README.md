# SubAPI

A RESTful API for managing user subscriptions, plans, and billing. This project provides endpoints to create, update, and manage subscriptions for digital products or services.

## Features

- User registration and authentication
- Subscription plan management (create, update, delete plans)
- Subscribe/unsubscribe users to plans
- Billing and payment integration (future)
- Webhook support for subscription events (future)

## Tech Stack

- Node.js / Express
- MongoDB or PostgreSQL (configurable)
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js (v20+)
- npm
- MongoDB or PostgreSQL instance

### Installation

```bash
git clone https://github.com/miketorreno/subapi.git
cd subapi
npm install
```

### Configuration

Copy `.env.example` to `.env` and update environment variables as needed.

### Running the API

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

## API Endpoints (Sample)

- `POST /api/v1/auth/register` – Register a new user
- `POST /api/v1/auth/login` – Authenticate user
- `GET /api/v1/plans` – List available subscription plans
- `POST /api/v1/subscribe` – Subscribe to a plan
- `POST /api/v1/unsubscribe` – Cancel a subscription

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
