# 🍔 Burger App

A burger-building and ordering web application built with React. Customize your burger ingredients, review your order, and submit your contact details through an interactive ordering workflow.

**[🚀 Live Demo](https://react-my-burger-ce22a.firebaseapp.com/))**

## ✨ Features

- **User Authentication** — Access the application through the authentication page using test credentials.
- **Custom Burger Builder** — Add or remove ingredients to create your preferred burger.
- **Order Summary** — Review your customized burger before proceeding.
- **Contact Information Form** — Enter your contact details to complete the ordering process.
- **Multi-Page Navigation** — Navigate between application pages using React Router.
- **State Management** — Manage application data and interactions with Redux.
- **API Integration** — Communicate with a backend service using Axios.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React 16 | Component-based user interface |
| React Router 5 | Client-side navigation |
| Redux | Application state management |
| Redux Thunk | Asynchronous state operations |
| Redux Saga | Side-effect management |
| Axios | HTTP requests |
| JavaScript (ES6+) | Application logic |
| CSS / Sass | Styling |
| Create React App | Development and build tooling |
| Firebase Hosting | Live demo deployment |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/VincentGuo25/burger-project.git
```

**2. Navigate to the project directory**

```bash
cd burger-project
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

> **Note:** This project uses an older React and Create React App toolchain. A compatible Node.js version may be necessary if you encounter dependency or build errors.

## 🍔 How to Use

You can try the complete ordering flow through the [live demo](https://react-my-burger-ce22a.firebaseapp.com/).

1. **Authenticate** — Open the authentication page and enter test email and password credentials.
2. **Build your burger** — Use the **More** and **Less** controls to adjust the ingredients.
3. **Review your order** — Click **Order Now** to open the order summary.
4. **Continue** — Confirm the order summary to proceed.
5. **Enter contact details** — Fill in the contact information form.
6. **Submit your order** — Click **Order** and wait for the request to finish.

The application redirects back to the main burger page after the submission process completes.

*Use test information only when experimenting with this learning project.*

## 📁 Project Structure

```text
burger-project/
├── config/          # Build and test configuration
├── public/          # Static assets and HTML template
├── scripts/         # Development, build, and test scripts
├── src/             # React application source code
├── package.json     # Dependencies and npm scripts
├── package-lock.json
└── README.md
```

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server |
| `npm test` | Runs the test suite |
| `npm run build` | Creates a production build |

## 🎯 Learning Objectives

This project was developed as part of learning React and modern frontend development. It demonstrates practical experience with:

- Creating reusable and composable React components.
- Managing application state with Redux.
- Implementing client-side routing.
- Handling asynchronous actions and API requests.
- Building an interactive form-based ordering workflow.
- Organizing a frontend project for development and production builds.

## ⚠️ Project Notes

- This is a learning project, not a verified production-ready ordering platform.
- Use the demo's test credentials rather than real account credentials.
- Backend availability may affect authentication and order submission.
- No real payment processing is documented as part of this project.

## 🙏 Acknowledgments

Inspired by the React course **React 16.6 — The Complete Guide (incl. React Router & Redux)**.

- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

Made with 🍔 and React.
