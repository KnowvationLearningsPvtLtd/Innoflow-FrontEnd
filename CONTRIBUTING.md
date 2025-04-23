# Contributing to InnoFlow-FrontEnd

Thank you for your interest in contributing to InnoFlow-FrontEnd! This document provides guidelines and instructions for contributing to our Visual Tool for Building AI Agents.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Coding Standards](#coding-standards)
8. [Testing](#testing)
9. [Documentation](#documentation)
10. [Community](#community)

## Code of Conduct

Our community is dedicated to providing a welcoming experience for everyone. We do not tolerate inappropriate behavior toward participants in any form. Please be respectful and constructive in all interactions.
## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or pnpm
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   bash
   git clone https://github.com/KnowvationLearningsPvtLtd/Innoflow-FrontEnd.git
   cd Innoflow-FrontEnd
   
3. Install dependencies:
   bash
   npm install
   # or
   pnpm install
   
4. Create a new branch:
   bash
   git checkout -b feature/your-feature-name
   

## Project Structure

The InnoFlow project follows this structure:


app/                 # Next.js pages and routes
components/          # Reusable React components
├── auth/            # Authentication components
├── dashboard/       # Dashboard-related components
├── docs/            # Documentation components
├── flow/            # Flow editor components
│   ├── nodes/       # Individual node implementations
├── landing/         # Landing page components
├── ui/              # Base UI components (shadcn)
hooks/               # Custom React hooks
lib/                 # Utility functions and helpers
public/              # Static assets
└── images/          # Images and icons
styles/              # Global styles


## Development Workflow

1. Create an issue or select an existing one to work on
2. Create a new branch from main:
   bash
   git checkout -b feature/issue-number-short-description
   
3. Make your changes
4. Run tests and ensure they pass
5. Commit your changes following commit guidelines
6. Push to your fork and submit a pull request

### Running the Development Server

bash
npm run dev
# or
pnpm dev


Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Commit Guidelines

We follow the Conventional Commits standard to ensure consistent commit messages. Each commit must follow this format:


<type>: <description>


### Valid Commit Types

| Type       | Meaning                                                 |
|------------|---------------------------------------------------------|
| feat     | New feature (component, page, hook)                     |
| fix      | Bug fix                                                 |
| docs     | Documentation changes                                   |
| style    | CSS/styling changes (no logic changes)                  |
| refactor | Code changes with no feature/bug changes                |
| revamp   | Major UI/UX redesign or component overhaul              |
| perf     | Performance improvements                                |
| test     | Adding/modifying tests                                  |
| chore    | Routine tasks, dependency updates                       |

### Formatting Rules

- Start with a capital letter
- Keep messages concise (max 72 characters)
- No periods at the end
- Use imperative mood ("Add feature" not "Added feature")

### Examples


feat: Add agent builder interface
fix: Resolve issue with sidebar navigation
docs: Update flow editor documentation
style: Improve dark mode contrast


## Pull Request Process

1. Ensure all tests pass locally
2. Update documentation if necessary
3. Fill out the pull request template completely
4. Request a review from at least one maintainer
5. Address any review comments
6. Once approved, a maintainer will merge your PR

### PR Title Format

Follow the same format as commit messages:


feat: Implement drag-and-drop for flow nodes


## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define interfaces for props and state
- Use proper type annotations

### React

- Use functional components and hooks
- Follow composition patterns over inheritance
- Keep components focused and single-purpose
- Use proper component file naming:
  - Component files: PascalCase.tsx (e.g., FlowEditor.tsx)
  - Utility files: kebab-case.ts (e.g., use-flow-state.ts)

### Styling

- Use Tailwind CSS for styling
- Follow the color scheme defined in tailwind.config.ts
- Ensure responsive design for all viewport sizes
- Maintain accessibility standards (WCAG 2.1 AA)

## Testing

We use Jest and React Testing Library for tests. To run tests:

bash
npm run test
# or
pnpm test


### Testing Guidelines

- Write tests for all new components and features
- Maintain at least 80% code coverage
- Test actual user behavior, not implementation details
- Follow AAA pattern (Arrange, Act, Assert)

## Documentation

- Document all new components with JSDoc comments
- Update the README.md when adding significant features
- For user-facing features, add appropriate documentation in the /docs section

## Community

- Join our Discord server for discussions
- Ask questions in GitHub issues
- Participate in code reviews

---

Thank you for contributing to InnoFlow! Your efforts help make this project better for everyone.
