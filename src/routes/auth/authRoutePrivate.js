import express from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import { authorizeRole } from '../../middleware/roleMiddleware.js';
import { readDataController } from '../../controllers/studentReadDataController.js';
import { updateStudentController } from '../../controllers/auth/studentUpdateController.js';
import { deleteStudentController } from '../../controllers/auth/studentDeleteController.js';

const router= express.Router();

router.use(authenticate);

router.get('/read', authorizeRole('teacher') ,readDataController);
router.patch('/update/:id', updateStudentController);
router.delete('/delete/:id', authorizeRole('teacher'), deleteStudentController);


export default router;