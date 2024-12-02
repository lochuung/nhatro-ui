# Boarding House Management System - Frontend

A React-based frontend application for managing boarding house operations. Built with Vite and modern React practices.

## Features

- Contract Management 
  - Create/Update/Delete contracts
  - Member management  
  - Contract document generation
  - Contract status tracking

- Invoice Management
  - Monthly invoice generation
  - Invoice document export (PDF/Word)
  - Payment tracking
  - Invoice history

- Room Management
  - Room availability status
  - Room details and services
  - Room search and filtering

- User Interface
  - Modern responsive design
  - Dark/Light theme support
  - Role-based access control
  - Real-time data updates

## Technology Stack

- React 18
- Vite
- Ant Design Components
- React Query for API management
- React Router for navigation
- JWT Authentication
- Axios for HTTP requests

## Prerequisites

- Node.js 16+
- npm/yarn
- Git

## Getting Started

1. Clone the repository

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
    
```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

4. Build the application

```bash
npm run build
```

## Project Structure

```
boarding-house-ui/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── assets/         # Static assets
│   └── config/         # Configuration files
├── public/             # Public static files
└── index.html    
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

```
VITE_API_URL=<api-base-url>
VITE_IMAGE_URL=<file-upload-base-url>
```

## Contributing

- Fork the repository
- Create a feature branch
- Commit your changes
- Push to the branch
- Create a Pull Request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository.