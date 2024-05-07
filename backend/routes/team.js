import express from 'express';
import authMiddleware from '../utils/authMiddleware.js';
import { createTeam, deleteTeam, getTeam, searchTeam, updateTeam } from '../controller/team.js';

const router = express.Router();

router.post("/create" , authMiddleware , createTeam)
.put("/update/:teamId" , authMiddleware , updateTeam)
.get("/get/:teamId" , getTeam)
.get('/search/:name' , searchTeam)
.delete("/delete/:teamId" , authMiddleware , deleteTeam)


export default router;