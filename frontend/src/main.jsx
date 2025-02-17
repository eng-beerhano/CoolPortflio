import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Expriences from './pages/Expriences.jsx';
import './index.css';
import DashboardPage from './pages/DashboardPage.jsx';
import AddExperience from './pages/AddExperience.jsx';
import AllExperience from './pages/AllExperience.jsx';
import EditExperience from './pages/EditExperience.jsx';
import AddSkill from './pages/AddSkill.jsx';
import AllSkills from './pages/AllSkills.jsx';
import EditSkill from './pages/EditSkill.jsx';
import AddProjectPage from './pages/AddProjectPage.jsx';
import AllProjects from './pages/AllProjects.jsx';
import ScreenSkills from './pages/ScreenSkills.jsx';
import ScreenAbout from './pages/ScreenAbout.jsx';
// import AboutPage from './pages/AboutPage.jsx';
import ContectPage from './pages/ContectPage';
import  Inbox  from './pages/inbox';
import Logout from './pages/Logout.jsx';


// import 'index.css';
// import DashboardPage from './pages/DashboardPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      
      { path: '/about', element: <h1>About Page</h1> },
      { path: '/contect', element: <h1>Contact Page</h1> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/Screenprojects', element: <ProjectsPage /> },
      {path: '/expriences', element: <Expriences />},
      { path: '/dashboard', element: <DashboardPage />, },
      { path: '/dashboard/add-experience', element: <AddExperience /> },
      {path: '/dashboard/all-experiences', element: <AllExperience />},
      { path: '/dashboard/edit-experience/:id', element: <EditExperience /> }, // Update this line
      {path: '/dashboard/addskills', element: <AddSkill />},
      { path: '/dashboard/all-skills', element: <AllSkills />},
      { path: '/dashboard/edit-skill/:id', element: <EditSkill /> },
      {path: '/dashboard/add-project', element: <AddProjectPage />},
      {path: '/dashboard/Allprojects', element: <AllProjects/>},
      {path: '/ScreenSkills', element: <ScreenSkills/>},
      {path: '/ScreenAbout', element: <ScreenAbout/>},
      { path: '/contectPage', element: <ContectPage /> },
      {path: '/dashboard/inbox', element: <Inbox/>},
      {path: '/dashboard/logout', element: <Logout/>},
      // {path : 'about', element:<AboutPage/>},
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

export default router;