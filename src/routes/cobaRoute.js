import express from 'express';
import {
    getHome,
    getNext,
    sendNext,
    postHome
} from '../controllers/cobaController.js';

const router= express.Router();

router.get('/', getHome);

router.get('/next', getNext, sendNext);

router.post('/', postHome);

export default router;