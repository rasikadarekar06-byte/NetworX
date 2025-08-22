
# NetworX

NetworX is a MERN stack social platform for professional networking and job seeking.

## Features
- **User Roles:** Freelancer (Job Seeker) and Producer (Job Provider)
- **Authentication:** JWT-based authentication
- **Route Protection:** Secured routes for each user type
- **Dashboards:** Separate dashboards for Freelancers and Producers
- **Job Management:** Producers can create, update, and manage job posts; Freelancers can apply to jobs
- **Profile Management:** Users can create and customize their profiles
- **Connections:** Users can connect with each other
- **Chat:** Real-time chat between connected users
- **Admin Panel:** Manage users and jobs with a dedicated admin interface

---

## Frontend

### Technologies Used
- [ReactJS](https://react.dev/)
- [Material UI](https://mui.com/material-ui/)
- [React Router Dom](https://reactrouter.com/en/main)

### Setup & Installation
1. Make sure you have [NodeJS](https://nodejs.org/en/) installed.
2. Clone this repository:
    ```bash
    git clone <your-repo-url>
    ```
3. Install dependencies:
    ```bash
    cd frontend
    npm install
    ```
4. Start the frontend:
    ```bash
    npm run dev
    ```
5. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## Backend

### Technologies Used
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.io](https://socket.io/)

### Setup & Installation
1. Make sure you have [NodeJS](https://nodejs.org/en/) installed.
2. Clone this repository (if not already done):
    ```bash
    git clone <your-repo-url>
    ```
3. Install dependencies:
    ```bash
    cd backend
    npm install
    ```
4. Set up your `.env` file (see `.env.example` for required variables: `JWT_SECRET`, `PORT`, `MONGODB_URL`, etc.)
5. Start the backend:
    ```bash
    node index.js
    ```
6. The backend will run on [http://localhost:3000/](http://localhost:3000/)

---

## Usage

- Visit the frontend URL and sign up as a Freelancer or Producer.
- Use the Admin Login (on the homepage) to access the admin panel (default: `admin`/`admin123`).
- Explore dashboards, job posts, connections, and chat features.

---

## License
This project is for educational purposes.
