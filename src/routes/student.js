import express from 'express';
import { addStudent } from '../controllers/studentController.js';

const router= express.Router();

router.post('/tambah', addStudent);

export default router;