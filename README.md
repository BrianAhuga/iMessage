# iMessage

A modern **full-stack real-time messaging application** inspired by the iMessage experience, featuring secure authentication, real-time conversations, media sharing, online presence, and a responsive chat interface.

The application is built with **React and Vite on the frontend** and **Node.js, Express, MongoDB, and Socket.IO on the backend**, with Clerk providing authentication and ImageKit supporting media management. The entire application can also be packaged and deployed using Docker.

## Overview

iMessage is a full-stack messaging platform designed to demonstrate the development of a modern real-time communication application.

The application separates the frontend and backend into dedicated projects while maintaining a shared deployment workflow through Docker. The backend exposes authentication and messaging routes, manages persistent data through MongoDB, handles real-time communication through Socket.IO, and integrates external services for authentication and media management.

## Features

* User authentication
* Secure user sessions
* Real-time messaging
* One-to-one conversations
* Message history
* Online/offline presence
* Real-time message updates
* Media and image sharing
* User profiles
* Responsive chat interface
* Toast notifications
* Client-side state management
* REST API
* WebSocket communication
* MongoDB persistence
* Production-ready Docker configuration

## Technology Stack

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| **React 19**     | Frontend application               |
| **Vite**         | Frontend build tooling             |
| **Tailwind CSS** | UI styling                         |
| **HeroUI**       | UI components                      |
| **Node.js**      | Backend runtime                    |
| **Express 5**    | REST API                           |
| **MongoDB**      | Database                           |
| **Mongoose**     | MongoDB object modeling            |
| **Socket.IO**    | Real-time communication            |
| **Clerk**        | Authentication and user management |
| **ImageKit**     | Image and media management         |
| **Axios**        | HTTP communication                 |
| **Zustand**      | Client-side state management       |
| **React Router** | Application routing                |
| **Docker**       | Containerization and deployment    |

The frontend uses React, Tailwind CSS, HeroUI, Clerk, Axios, Socket.IO Client, Zustand, React Router, and related tooling. The backend uses Express, Mongoose, Clerk Express, Socket.IO, ImageKit, Multer, CORS, dotenv, and cron.

## Architecture

The project follows a separated frontend/backend architecture:

```text
iMessage
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── data
│   │   ├── lib
│   │   ├── pages
│   │   ├── store
│   │   ├── styles
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── lib
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── webhooks
│   │   └── index.js
│   └── package.json
│
├── Dockerfile
├── .dockerignore
└── .gitignore
```

The frontend contains dedicated components, pages, state management, context, data, and styling layers, while the backend separates controllers, models, routes, middleware, libraries, and webhooks.

## Real-Time Communication

Real-time messaging is implemented using **Socket.IO**.

The backend initializes a Socket.IO server alongside Express, while the frontend uses the Socket.IO client to communicate with the server. This enables messages and relevant communication events to be delivered without requiring the user to manually refresh the application.

The architecture allows the application to support real-time features such as:

* Instant message delivery
* Online presence
* Live conversation updates
* Real-time communication events

## Authentication

Authentication is handled using **Clerk**.

The backend integrates Clerk through `@clerk/express` and Clerk middleware, while the React frontend uses `@clerk/react` for authentication-related functionality.

The backend also exposes authentication routes under:

```text
/api/auth
```

and messaging routes under:

```text
/api/messages
```

A dedicated Clerk webhook endpoint is also configured for receiving authentication-related events.

## Database

The application uses **MongoDB** with **Mongoose** for data persistence.

Mongoose is responsible for defining and interacting with the application's database models, while the backend establishes the database connection when the server starts.

## Media Management

Media uploads are supported through **ImageKit**.

The backend includes ImageKit and Multer for handling media-related functionality, allowing the application to process and manage uploaded files while keeping media storage separate from the main application database.

## State Management

The frontend uses **Zustand** for client-side state management.

This provides a lightweight mechanism for managing application state across components without requiring excessive prop passing or complex state-management infrastructure.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 22 or later
* npm
* MongoDB
* Git

You will also need accounts/configuration for:

* Clerk
* ImageKit

### Clone the Repository

```bash
git clone https://github.com/BrianAhuga/iMessage.git
```

Navigate into the project:

```bash
cd iMessage
```

## Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Add any additional environment variables required by your configured Clerk and ImageKit integrations.

Start the backend:

```bash
npm run dev
```

The backend runs on the configured port.

## Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure the required frontend variables:

```env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the frontend:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## Production Build

The repository includes a multi-stage Dockerfile that builds both the React frontend and Express backend into a single production image.

The Docker configuration:

1. Builds the React/Vite frontend.
2. Builds the backend bundle.
3. Installs production backend dependencies.
4. Copies the compiled frontend into the backend's public directory.
5. Runs the Express application as the production server.

### Build the Docker Image

From the repository root:

```bash
docker build \
  --build-arg VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key \
  -t imessage .
```

### Run the Container

```bash
docker run -p 3001:3001 imessage
```

The production application can then be accessed through the exposed application port.

## Development Commands

### Frontend

```bash
npm run dev
```

Start the Vite development server.

```bash
npm run build
```

Create a production frontend build.

```bash
npm run lint
```

Run ESLint.

```bash
npm run preview
```

Preview the production frontend build.

### Backend

```bash
npm run dev
```

Start the backend using Nodemon.

```bash
npm start
```

Start the backend normally.

```bash
npm run build
```

Prepare the backend source for production deployment.

## API

The backend currently exposes core API areas including:

```text
/api/auth
/api/messages
```

It also provides a health-check endpoint:

```text
GET /health
```

which returns a successful response when the backend is running.

## Environment Variables

### Backend

| Variable                | Description               |
| ----------------------- | ------------------------- |
| `PORT`                  | Backend server port       |
| `NODE_ENV`              | Application environment   |
| `FRONTEND_URL`          | Frontend application URL  |
| `MONGODB_URI`           | MongoDB connection string |
| `CLERK_SECRET_KEY`      | Clerk backend secret      |
| `IMAGEKIT_PRIVATE_KEY`  | ImageKit private key      |
| `IMAGEKIT_PUBLIC_KEY`   | ImageKit public key       |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint     |

### Frontend

| Variable                     | Description           |
| ---------------------------- | --------------------- |
| `VITE_API_URL`               | Backend API URL       |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

**Never commit private keys, database credentials, or other secrets to GitHub.**

## Security

The application uses several security-oriented integrations and practices, including:

* Clerk-based authentication
* Protected backend middleware
* Environment-based configuration
* CORS configuration
* Webhook handling
* Separation of public and private credentials

The Clerk webhook endpoint intentionally receives raw request data before JSON parsing so that webhook payload handling can be performed correctly.

## Future Improvements

Potential improvements include:

* Group conversations
* Message reactions
* Message editing and deletion
* Typing indicators
* Read receipts
* Message search
* Push notifications
* Voice messages
* Video calling
* File attachments
* Message replies
* Message forwarding
* Conversation archiving
* Advanced presence indicators
* End-to-end encryption
* Automated testing
* CI/CD pipeline
* Improved observability and logging

## Project Goals

The project was built to demonstrate practical full-stack engineering concepts including:

* Modern React application development
* REST API development
* Real-time communication
* Authentication integration
* Database modeling
* File and media management
* Client-side state management
* WebSocket architecture
* Modular backend design
* Containerized deployment

Rather than treating messaging as a simple CRUD problem, the application combines **persistent data, authentication, real-time events, media handling, and frontend state management** into a single full-stack system.

## Author

**Brian Ahuga**

Software Engineer specializing in scalable software systems, modern web applications, backend services, and full-stack development.

GitHub: [BrianAhuga](https://github.com/BrianAhuga)

## License

This project is intended for learning, experimentation, and portfolio demonstration.
