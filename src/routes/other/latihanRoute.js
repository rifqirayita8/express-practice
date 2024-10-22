import express from 'express';
import { createUserController } from '../../controllers/other/latihan-controller.js';
import { postUserController } from '../../controllers/other/latihan-post-controller.js';

const router= express.Router();
router.post('/v1/users', postUserController);

export default router;