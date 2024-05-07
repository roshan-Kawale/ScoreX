import express from 'express';
import { getUser } from '../controller/user.js';

const router = express.Router();

router.get('/:username' , getUser);

export default router;