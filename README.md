# Next.js Authentication Frontend

This repository contains the frontend for a Next.js authentication project. The backend for this project can be found [here](https://github.com/seamoonpandey/express-jwt-auth).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)
- [License](#license)

## Introduction

This project is a frontend application built with Next.js for user authentication. It interacts with a backend server to perform tasks such as user registration, login, and authentication management using JWT.

## Features

- User Registration
- User Login
- Token-based Authentication
- Protected Routes
- Responsive Design

## Tech Stack

- [Next.js](https://nextjs.org/)
- TypeScript
- CSS
- [Express](https://expressjs.com/) (backend)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RakshaRaut/auth-fe-nextjs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd auth-fe-nextjs
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

Create a `.env.local` file in the root of the project and add the following environment variables:

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Replace the `NEXT_PUBLIC_API_URL` value with the URL of your backend API.

## Running the Project

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs the linter to check for code issues.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

