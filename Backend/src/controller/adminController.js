import Admin from '../models/Admin.js';
import Experience from '../models/experience.js';
import Project from '../models/projects.js';
import Skill from '../models/skills.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Sign-up controller
export const signUp = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newAdmin = new Admin({ username, email, password: hashedPassword });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

// Login controller
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (!existingAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingAdmin.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: existingAdmin.email, id: existingAdmin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: existingAdmin, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
// logout the user
 export const logout = async (req, res) => {
    res.clearCookie('token', { path: '/' });
    res.status(200).json({ message: 'Logged out successfully' });
};

// Experience controllers
export const addExperience = async (req, res) => {
    const { placeOfWork, yearsAtWork } = req.body;
    const picture = req.file.path;

    try {
        const newExperience = new Experience({ placeOfWork, yearsAtWork, picture });
        await newExperience.save();

        res.status(201).json({ message: 'Experience added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
// Get All Experience
export const getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find();

        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const updateExperience = async (req, res) => {
    const { id } = req.params;
    const { placeOfWork, yearsAtWork } = req.body;
    const picture = req.file ? req.file.path : req.body.picture;

    try {
        const updatedExperience = await Experience.findByIdAndUpdate(id, { placeOfWork, yearsAtWork, picture }, { new: true });
        if (!updatedExperience) {
            return res.status(404).json({ message: 'Experience not found' });
        }

        res.status(200).json({ message: 'Experience updated successfully', updatedExperience });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const deleteExperience = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExperience = await Experience.findByIdAndDelete(id);
        if (!deletedExperience) {
            return res.status(404).json({ message: 'Experience not found' });
        }

        res.status(200).json({ message: 'Experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};


// Project controllers
export const addProject = async (req, res) => {
    const { title, description, link } = req.body;
    const picture = req.file.path;

    try {
        const newProject = new Project({ title, description, link, picture });
        await newProject.save();

        res.status(201).json({ message: 'Project added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
// Get All Projects

export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, description, link } = req.body;
    const picture = req.file ? req.file.path : req.body.picture;

    try {
        const updatedProject = await Project.findByIdAndUpdate(id, { title, description, link, picture }, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project updated successfully', updatedProject });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

// Skill controllers
export const addSkill = async (req, res) => {
    const { name, proficiency } = req.body;
    const SkillImage = req.file.path;

    try {
        const newSkill = new Skill({ name, proficiency, SkillImage });
        await newSkill.save();

        res.status(201).json({ message: 'Skill added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
// Get All Skills
 export const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();

        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const updateSkill = async (req, res) => {
    const { id } = req.params;
    const { name, proficiency } = req.body;
    const SkillImage = req.file ? req.file.path : req.body.SkillImage;

    try {
        const updatedSkill = await Skill.findByIdAndUpdate(id, { name, proficiency, SkillImage }, { new: true });
        if (!updatedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        res.status(200).json({ message: 'Skill updated successfully', updatedSkill });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const deleteSkill = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSkill = await Skill.findByIdAndDelete(id);
        if (!deletedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};