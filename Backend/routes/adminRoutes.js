import express from 'express';
import { signUp, login, addExperience, updateExperience, deleteExperience, addProject, updateProject, deleteProject, addSkill, updateSkill, deleteSkill, getAllExperiences, getAllSkills, getAllProjects, logout } from '../controller/adminController.js';
// import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/logout', logout);
router.post('/experience', upload.single('picture'), addExperience);
router.get('/get-experiences', getAllExperiences );
router.put('/experience/:id', upload.single('picture'), updateExperience);
router.delete('/experience/:id',  deleteExperience);
router.post('/project', upload.single('picture'), addProject);
 router.get('/projects', getAllProjects);
router.put('/project/:id', upload.single('picture'), updateProject);
router.delete('/project/:id', deleteProject);
router.post('/skill', upload.single('SkillImage'), addSkill);
 router.get('/skills', getAllSkills);
router.put('/skill/:id',  updateSkill);
router.delete('/skill/:id', deleteSkill);

export default router;