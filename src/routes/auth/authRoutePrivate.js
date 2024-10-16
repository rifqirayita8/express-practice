import express from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import { readDataController } from '../../controllers/studentReadDataController.js';

const router= express.Router();

router.use(authenticate);

router.get('/read', readDataController);

export default router;