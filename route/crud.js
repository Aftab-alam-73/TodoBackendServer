import express from 'express';

import { DeleteTask, GetAllCompletedTask, create, readAllTheTask, readSingleTask,searchTask,taskCompleted,updateTask } from '../controllers/crud.js';

const router= express.Router();
 

router.get('/read',readAllTheTask)
router.get('/read/:id',readSingleTask)
router.get('/search',searchTask)
router.get('/getallCompletedTask',GetAllCompletedTask)
router.post('/write',create)
router.put('/update',updateTask)
router.put('/completed',taskCompleted)
router.delete("/deletetask/:id",DeleteTask)






export default router;