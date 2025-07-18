# Pop Tech Quiz

A modern, interactive quiz application built with React, TypeScript, and Express. Test your knowledge with a variety of tech-related questions!

## Demo
Watch the application in action: [Demo Video](https://drive.google.com/file/d/1Evo8H9y3YtaSNrkQPek_7lHL93NAig6o/view?usp=sharing)


## Features

- Interactive quiz interface
- Real-time score tracking
- Randomized questions
- Responsive design
- Comprehensive test coverage (E2E and Component tests)

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Vite
  - Bootstrap
  - ESLint
- Backend:
  - Express
  - MongoDB
  - Mongoose
- Testing:
  - Cypress (E2E and Component tests)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd Pop-tech-quiz
   ```

2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start the server (from server directory)
   npm run dev

   # Start the client (from client directory)
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Testing

The application includes both end-to-end and component tests using Cypress.

### Running Tests

```bash
# Run E2E tests
npm run test

# Run component tests
npm run test:component
```

## Project Structure

```
Pop-tech-quiz/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # React components
│   │   ├── models/        # TypeScript interfaces
│   │   ├── services/      # API services
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Application entry point
│   ├── public/            # Public static files
│   ├── .eslintrc.cjs      # ESLint configuration
│   ├── tsconfig.json      # TypeScript configuration
│   └── vite.config.ts     # Vite configuration
├── server/                 # Backend Express application
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Mongoose models
│   │   └── routes/        # API routes
│   ├── dist/              # Compiled TypeScript output
│   └── tsconfig.json      # TypeScript configuration
├── cypress/               # Cypress test files
├── cypress.config.ts      # Cypress configuration
└── package.json          # Root package.json for shared scripts
```

### Key Features Implementation

1. **Quiz Component**
   - Handles quiz state management
   - Manages question navigation
   - Tracks user score
   - Provides restart functionality

2. **API Integration**
   - Fetches random questions from the server
   - Handles loading states
   - Manages error cases

3. **Testing Strategy**
   - E2E tests for complete user flows
   - Component tests for isolated functionality
   - API mocking for consistent test data

## Development

### Code Quality

The project uses ESLint for code quality and consistency:
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

### TypeScript Configuration

The project uses TypeScript for type safety:
- Client: `client/tsconfig.json` and `client/tsconfig.node.json`
- Server: `server/tsconfig.json`

### Build Process

```bash
# Build the client
cd client
npm run build

# Build the server
cd server
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
