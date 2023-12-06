import express, { Router } from 'express';
import controller from '../controllers/tasks';

const router: Router = express.Router();

// POST endpoints
router.post('/create/task', controller.createTask);

// GET endpoints
router.get('/get/all', controller.getAllTasks);

// PUT endpoints
router.put('/update/task', controller.updateTask);

// DELETE endpoints
router.delete('/delete/task', controller.deleteTask);

router.delete('/delete/tasks', controller.deleteTasks);

export = router;