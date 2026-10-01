# HabitRoast ☕️🤖 — The Sarcastic Accountability App

A productivity web application that uses AI to keep you on track with personalized roasts.

## 🚀 Overview

HabitRoast is a modern, dark-themed productivity tool that combines task management with AI-driven accountability. Users can set goals, track habits, and receive witty, sarcastic, and motivational feedback from an AI assistant.

---

## 🎯 Key Features  

### Modern UI & UX
- **Neumorphic Design**: Soft, glossy UI elements with custom `glass-smash` shadows.
- **Smooth Animations**: Framer Motion-powered micro-interactions and page transitions.
- **Interactive Elements**: Live typing effects, hover glows, and dynamic gradients.

### AI-Powered Task Management
- **AI Task Generation**: Create realistic to-do items based on user goals.
- **Smart Deadlines**: AI assigns due dates with varying levels of urgency.
- **Progress Tracking**: Simple status system (Pending, In Progress, Complete).

### Sarcastic Accountability
- **Roast Generator**: AI-generated sarcastic comments for procrastination.
- **Tone System**: Adaptive tones (Sarcastic, Motivational, Funny) for different moods.
- **Streak System**: Track consecutive days of productivity.

### User Authentication
- **Secure Login**: Email/Password authentication using JWT.
- **Protected Routes**: Middleware to secure dashboard and profile pages.
- **Session Management**: Real-time session validation.

### Responsive Design
- **Mobile-First**: Optimized for mobile devices.
- **Desktop Adaptive**: Expands gracefully on larger screens.
- **Tablet Optimized**: Support for medium-sized screens.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) with [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**:
    - [Tailwind CSS](https://tailwindcss.com/) v4
    - [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Authentication**: [React Hook Form](https://react-hook-form.com/), [zod](https://zod.dev/)
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-animate-css](https://github.com/anvithm/tailwind-animate-css)

### Backend
- **Framework**: [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcryptjs](https://github.com/kelektiv/node-bcrypt)
- **Validation**: [express-validator](https://github.com/express-validator/express-validator)
- **AI**: Integrated with Gemini API (or mock)
- **Utilities**: [dotenv](https://github.com/motdotla/dotenv)

---

## 📂 Project Structure

```
habitroast-ai-web-app/
├── frontend/                # React/Next.js Application
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   ├── components/      # Reusable UI Components
│   │   ├── lib/             # Utility Functions
│   │   └── store/           # Zustand State Management
│   └── package.json
│
└── backend/                 # Node.js/Express API
    ├── config/              # Database configuration
    ├── controllers/         # Request handlers
    ├── middlewares/         # Authentication & validation
    ├── models/              # Mongoose schemas
    ├── routes/              # API endpoints
    ├── services/            # AI & business logic
    └── package.json
```

---

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Step 1: Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Create a `.env` file in the `backend/` directory:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    AI_API_KEY=your_gemini_api_key
    PORT=5000
    ```

4.  Start the server:
    ```bash
    npm run dev
    ```

### Step 2: Frontend Setup

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration

### Environment Variables

**Frontend** (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Backend** (`backend/.env`)
```env
# Database
MONGODB_URI=mongodb://localhost:27017/habitroast

# Authentication
JWT_SECRET=your_super_secret_jwt_key
JWT_LIFETIME=7d

# AI Integration
GEMINI_API_KEY=your_google_gemini_api_key

# Server
PORT=5000
```

---

## 🔄 Scripts

### Backend

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run start` | Start production server |
| `npm run seed` | Seed database with initial data |

### Frontend

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |

---

## 🧪 Database Seeding

You can seed the database with initial data (user, habits, etc.) using the backend script:

```bash
cd backend
npm run seed
```

This will create:
- An admin user (if not exists)
- Some sample habits and tasks

---

## 🎨 Design System

The application uses a custom design system with the following key elements:

### Color Palette
- **Background**: Black (`#0a0a0a`)
- **Text**: White (`#ffffff`)
- **Primary**: Gradient of Red/Orange/Yellow (Flame gradient)
- **Accents**: Red (`#ef4444`), Green (`#22c55e`)

### Glassmorphism
- `backdrop-blur-md`
- `backdrop-saturate-150`
- `border-white/[0.05]`

### Shadows
- **Neumorphic**: `glass-smash` (Custom CSS class in `global.css`)
- **Glow**: Soft glows on interactive elements

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📧 Support

For support or questions, please open an issue or contact the development team.

---

## 🔗 Useful Links

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://
