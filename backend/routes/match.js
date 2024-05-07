import express from 'express';
import authMiddleware from '../utils/authMiddleware.js';
import { createMatch, getMatch, getMatchById, makeDecision, updateMatch } from '../controller/match.js';

const router = express.Router();

router.post("/create" , authMiddleware , createMatch)
.post("/decision/:matchId" , authMiddleware , makeDecision)
.post("/matchDetail/:matchId" , authMiddleware , updateMatch)
.get("/get/:matchId" , getMatchById)
.get("/get" , getMatch)


export default router;