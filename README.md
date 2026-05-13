# WebShark

WebShark is a modern AI-powered Website Intelligence and SEO Analytics SaaS frontend built with React + Vite.

## Stack

- React + Vite
- Tailwind CSS + ShadCN-style UI primitives
- Recharts for analytics visualizations
- Lucide React icons
- React Router DOM
- Context API state management
- React Hook Form + Zod validation
- TanStack Table
- Framer Motion animations
- JSON Server mock backend

## Features

- Landing page with hero, features, pricing, testimonials, FAQ
- Auth flow: Login, Signup, Forgot Password, OTP Verification
- Main dashboard with drag-and-drop widgets
- Website audit module with progress and report cards
- SEO intelligence, competitor analysis, performance monitoring
- AI content assistant UI
- Analytics reports and lead generation
- Notifications center, integrations, billing and subscriptions
- Separate admin panel (role-based via fake auth)
- Global search + command palette
- Notification drawer, workspace switcher, theme toggle
- Interactive onboarding card and AI chatbot widget

## Project Structure

```text
src/
+-- assets/
+-- components/
+-- layouts/
+-- pages/
+-- services/
+-- hooks/
+-- routes/
+-- context/
+-- redux/
+-- data/
+-- utils/
+-- charts/
+-- constants/
+-- styles/
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start frontend:

```bash
npm run dev
```

3. Start JSON Server mock API:

```bash
npm run mock
```

4. Or run both frontend + mock API together:

```bash
npm run dev:full
```

## Mock API Endpoints

- `GET /users`
- `GET /websites`
- `GET /audits`
- `GET /keywords`
- `GET /competitors`
- `GET /reports`
- `GET /notifications`
- `GET /subscriptions`
- `GET /integrations`
- `GET /leads`
- `GET /workspaces`

Base URL default: `http://localhost:4000`

## Demo Login

- Email: `admin@webshark.ai`
- Password: `admin123`


