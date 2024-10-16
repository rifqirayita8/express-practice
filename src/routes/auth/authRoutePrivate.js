import express from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import { authorizeRole } from '../../middleware/roleMiddleware.js';
import { readDataController } from '../../controllers/studentReadDataController.js';

const router= express.Router();

router.use(authenticate);

router.get('/read', authorizeRole('teacher') ,readDataController);

export default router;