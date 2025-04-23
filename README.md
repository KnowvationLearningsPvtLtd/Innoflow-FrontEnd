# InnoFlow Frontend
A Visual Tool for Building AI Agents - Frontend Documentation

![InnoFlow Logo](public/images/three.jpg)

## 🚀 Overview
InnoFlow's frontend provides an intuitive, drag-and-drop interface for designing, configuring, and deploying AI agent workflows. Built with React, Next.js, and Tailwind CSS, the frontend offers a seamless experience for creating complex AI systems without coding.

---

## 🔧 Tech Stack
- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **State Management**: React Context API & useState
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Routing**: Next.js App Router

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/Innoflow-FrontEnd.git
   cd Innoflow-FrontEnd
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API endpoint and other configurations
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔄 Available Scripts

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`
- **Type Check**: `npm run type-check`
- **Format Code**: `npm run format`
- **Run Tests**: `npm run test`

---

## 📜 Commit Message Guidelines

Follow the same **commitlint** and **Conventional Commits** standard as the backend:

### Commit Format
```
<type>: <description>
```

### Frontend-Specific Commit Types

| Type       | Meaning                                                 |
|------------|---------------------------------------------------------|
| `feat`     | New feature (component, page, hook)                     |
| `fix`      | Bug fix                                                 |
| `docs`     | Documentation changes                                   |
| `style`    | CSS/styling changes (no logic changes)                  |
| `refactor` | Code changes with no feature/bug changes                |
| `revamp`   | Major UI/UX redesign or component overhaul              |
| `perf`     | Performance improvements                                |
| `test`     | Adding/modifying tests (Jest, React Testing Library)    |
| `chore`    | Routine tasks, dependency updates                       |

---

## 🧪 Testing Guidelines

| Test Type       | What to Test?                           | Tools                           |
|-----------------|----------------------------------------|----------------------------------|
| **Unit Tests**  | Hooks, Utilities, State Transformations | Jest, React Testing Library     |
| **Component Tests** | UI Components, Rendering Logic     | React Testing Library           |
| **Integration Tests** | Component Interactions, User Flows | Cypress                       |
| **E2E Tests**   | Full User Journeys                     | Cypress                         |

Run tests with:
```bash
npm run test                # Run all tests
npm run test:watch          # Run tests in watch mode
npm run test:coverage       # Generate coverage report
npm run test:e2e            # Run E2E tests with Cypress
```

---

## 🎨 UI Component Development

### Component Creation Workflow

1. **Design in Figma** (if applicable)
2. **Create component file** in appropriate directory
3. **Build the component** using shadcn/ui base components
4. **Write tests** for the component
5. **Document component** with JSDoc comments
6. **Create a Storybook story** (if using Storybook)

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow project color themes defined in `tailwind.config.js`
- Use responsive design patterns for all components
- Ensure accessibility compliance (WCAG 2.1 AA)

---

## 🔁 State Management

- Use React Context for global state (authentication, theme, etc.)
- Use useState/useReducer for component-level state
- Consider using React Query for server state management
- Use consistent patterns for loading, error, and success states

---

## 📱 Responsive Design

InnoFlow supports the following breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Test your components thoroughly at each breakpoint.

---

## 🌐 API Integration

- All API calls should be centralized in services
- Use React Query for data fetching when possible
- Handle loading and error states consistently
- Implement proper authentication token management

---

## 🔐 Authentication Flow

1. **Login/Register**: Via forms at `/auth`
2. **Token Storage**: Secure storage in HTTP-only cookies
3. **Protected Routes**: HOC wrapper for authenticated routes
4. **Token Refresh**: Automatic token refresh mechanism
5. **Logout**: Clear tokens and redirect to login

---

## 🚀 Deployment

The frontend can be deployed using:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** (for custom deployments)

CI/CD pipeline is configured via GitHub Actions.

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## 🤝 Contributing

Please refer to the main [CONTRIBUTING.md](/CONTRIBUTING.md) file in the project root for contribution guidelines.

---

By following these guidelines, your contributions to **InnoFlow's frontend** will maintain a high standard of quality and consistency! 🚀
