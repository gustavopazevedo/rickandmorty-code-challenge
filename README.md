# Rick and Morty Code Challenge

## How to run locally?

```bash
# Install dependencies
npm install

# Create a .env file at the root of the project with the following:
NEXT_PUBLIC_GRAPHQL_API_URL=https://rickandmortyapi.com/graphql

# Run the development server
npm run dev

# Run unit tests
npm run test
```

## Project Overview

- The UI is divided into two main sections at the top of the page, each occupying half the screen for improved readability when displaying data.
- Three additional cards are displayed at the bottom to show extra insights in a simplified format, using titles and summary numbers.
- Atomic Design methodology is used to organize components, improving scalability, maintainability, and reusability.
- Custom React hooks abstract GraphQL fetching logic via Apollo and GraphQL Codegen, ensuring type safety and modularity.
- Performance is enhanced with memoized values and callbacks.
- The entire codebase is strongly typed using TypeScript.

## Tech Stack

- **Next.js**: Starting point to create the React app
- **TypeScript**: Type safety across the app
- **Apollo Client**: Data fetching with GraphQL
- **Codegen**: Type-safe GraphQL hooks based on schema
- **Tailwind CSS**: Styling
- **React Testing Library + Jest**: Unit testing
- **Recharts**: Chart
- **ESLint + Prettier**: Code quality and formatting

## Features

### Character Table

- Infinite scroll to load characters
- Filtering by name (via URL param and search input)

### Chart

- Pie chart of number of characters by location
- Less than 10 characters by location are grouped to make the chart more meaningful

### Additional

- Section to show count of alive characters
- Section to show count of human characters
- Section to show count of locations

### What was left?

- Complete unit tests for all components and hooks created.

### Demo

https://rickandmorty-code-challenge.vercel.app/
