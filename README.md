# Portfolio Project - Full Stack MERN Application

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project showcases personal projects, skills, and professional experience with a beautiful, interactive user interface.

## 🌟 Features

- **Modern UI**: Dark theme with gradient effects and glassmorphism
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Content**: Projects and experience sections fetched dynamically from backend API
- **Contact Form**: Functional contact form with backend integration
- **Admin Panel**: JWT-based authentication for content management
- **RESTful API**: Complete backend API for all portfolio data
- **Database Integration**: MongoDB for persistent data storage

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cors** - Cross-origin resource sharing

## 📁 Project Structure

```
Portfolio-Project/
├── README.md
├── .gitignore
├── package.json
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── .env
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── services/
    │   ├── utils/
    │   └── data/
    ├── package.json
    ├── tailwind.config.js
    └── .env
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iyerprash93434/Portfolio-Project.git
   cd Portfolio-Project
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install all dependencies (frontend + backend)**
   ```bash
   npm run install-all
   ```

4. **Set up environment variables**
   
   **Backend (.env in backend folder):**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```
   
   **Frontend (.env in frontend folder):**
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```
   
   This will start both backend (port 5000) and frontend (port 3000) simultaneously.

### Alternative Commands

- **Start backend only:** `npm run server`
- **Start frontend only:** `npm run client`
- **Build for production:** `npm run build`

## 📱 API Endpoints

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)
- `DELETE /api/contact/:id` - Delete message (admin)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Experience
- `GET /api/experience` - Get all experience
- `POST /api/experience` - Create experience (admin)
- `PUT /api/experience/:id` - Update experience (admin)
- `DELETE /api/experience/:id` - Delete experience (admin)

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

## 🎨 Customization

### Frontend Customization
- Update personal information in `frontend/src/utils/constants.js`
- Add your projects in `frontend/src/data/projects.js`
- Customize colors in `frontend/tailwind.config.js`

### Backend Customization
- Update API routes in `backend/routes/`
- Modify database models in `backend/models/`
- Add new controllers in `backend/controllers/`

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `cd frontend && npm run build`
2. Deploy the `build` folder to your hosting service
3. Update environment variables for production

### Backend (Heroku/Railway)
1. Set up MongoDB Atlas for production database
2. Update environment variables
3. Deploy backend to your hosting service

### Full Stack (Railway/Render)
1. Use the root `package.json` for deployment
2. Set build command: `npm run heroku-postbuild`
3. Set start command: `npm run server`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: iyerprashant44@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/iyerprash93434/)

## 🙏 Acknowledgments

- React Team for the amazing library
- Tailwind CSS for the utility-first framework
- MongoDB for the flexible database
- All the open-source contributors

---

⭐ **Star this repository if you found it helpful!**
