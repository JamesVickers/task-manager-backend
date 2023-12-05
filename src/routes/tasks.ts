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

/* 
    @usage: update a task by id
    @url: http://localhost:1337/tasks/update/task
    @method: PUT
    @fields: id, assignee?, description?, priority?
    @access: PUBLIC
*/
router.put('/update/task', controller.updateTask);

/* 
    @usage: delete a task
    @url: http://localhost:1337/tasks/delete/task
    @method: DELETE
    @fields: id
    @access: PUBLIC
*/
router.delete('/delete/task', controller.deleteTask);

export = router;