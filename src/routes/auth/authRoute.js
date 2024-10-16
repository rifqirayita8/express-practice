import express from 'express';
import publicRoute from './authRoutePublic.js';
import privateRoute from './authRoutePrivate.js';

const router= express.Router();

router.use(publicRoute);
router.use(privateRoute);

export default router;