import express, { Router } from 'express';
import controller from '../controllers/tasks';

const router: Router = express.Router();

/* 
    @usage: create a task
    @url: http://localhost:8888/tasks/create/task
    @method: POST
    @fields: assignee, description, priority
    @access: PUBLIC
*/
router.post('/create/task', controller.createTask);

/* 
    @usage: get all tasks
    @url: http://localhost:8888/tasks/get/all
    @method: GET
    @fields: no fields
    @access: PUBLIC
*/ router.get('/get/all', controller.getAllTasks);


export = router;