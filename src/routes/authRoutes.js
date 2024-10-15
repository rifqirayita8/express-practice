import express from 'express';
import { registerStudent } from '../controllers/studentRegisterController.js';
import { loginStudent } from '../controllers/studentLoginController.js';

const router= express.Router();

router.post('/register', registerStudent);
router.post('/login', loginStudent);

export default router;