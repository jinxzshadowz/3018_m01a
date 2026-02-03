# COMP-3018 – Module 1 API Project

This project is a back-end API built with Node.js, Express, and TypeScript.  
It includes automated testing with Jest and Supertest, and continuous integration using GitHub Actions.

The API provides:
- A health check endpoint
- A portfolio performance calculation endpoint

---

## Project Structure

src/
 ├── api/
 │    └── v1/
 │         ├── routes/
 │         │     ├── health.ts
 │         │     └── portfolio.ts
 │         └── portfolioPerformance.ts
 ├── app.ts
 └── server.ts
test/
 ├── health.test.ts
 ├── portfolioPerformance.test.ts
 └── portfolioEndpoint.test.ts
.github/
 └── workflows/
      └── ci.yml

---

## Getting Started

### Install dependencies
npm install

### Run the development server
npm run dev

Server runs at:
http://localhost:3006

---

## Running Tests

This project uses Jest and Supertest.

Run all tests:
npm test

---

## API Endpoints

### Health Check
GET /api/v1/health

Response:
{
  "status": "OK",
  "version": "1.0.0"
}

---

### Portfolio Performance
GET /api/v1/portfolio/performance

Query Parameters:
- initialInvestment (number, required)
- currentValue (number, required)

Example:
 /api/v1/portfolio/performance?initialInvestment=10000&currentValue=12000

Example Response:
{
  "initialInvestment": 10000,
  "currentValue": 12000,
  "profitOrLoss": 2000,
  "percentageChange": 20,
  "performanceSummary": "Solid gain. Keep monitoring your investments."
}

---

## Continuous Integration

This project includes a GitHub Actions workflow that runs automatically on:
- Pushes to development
- Pull requests into main

The workflow installs dependencies and runs the test suite.

---

## Notes

- All screenshots for the assignment were taken using Bruno with the required student ID visible.
- The portfolio performance logic matches the behavior shown in the assignment video demo.
- This repository follows the required branching strategy (development → PR → main).

---

## Author

Student ID: 427595  
Course: COMP-3018 – Back-End Development  
Assignment: Module 1 – Back-End Environment
