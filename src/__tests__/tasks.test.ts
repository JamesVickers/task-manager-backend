import request from 'supertest'
import mongoose from 'mongoose';
import config from '../config/config';
import app from '../app';
import { ITask, TaskModel } from '../models/task';

describe('Tasks: ', () => {
    let testDatabaseConnection;
    let createdTasks: ITask[];

    beforeAll(async () => {
        // Connect to a separate test database
        testDatabaseConnection = await mongoose.connect(config.mongo.url, config.mongo.options)
    });

    afterAll(async () => {
        // Disconnect from the test database after all tests
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        // Create test data before each test
        createdTasks = await TaskModel.create([
            { assignee: 'Assignee 1', description: 'Description 1', priority: 1 },
            { assignee: 'Assignee 2', description: 'Description 2', priority: 2 },
        ]);
        console.log('createdTasks: ', createdTasks)
    });

    afterEach(async () => {
        // Remove test data after each test
        await TaskModel.deleteMany({});
    });

    describe('/tasks/get/all: ', () => {
        describe('given a valid request: ', () => {
            const getAllTasksEndpoint = '/tasks/get/all';
            it('should return response code 200', async () => { // expect(true).toBe(true);

                const response = await request(app).get(getAllTasksEndpoint).send();

                // console.log('response: ', response);
                expect(response.statusCode).toBe(200);

            })
            // it('should return an array of tasks', async () => {
            //     // expect(true).toBe(true);

            //     const { body:  { message, count, tasks } } = await request(app).get(getAllTasksEndpoint).send();

            //     console.log('tasks: ', tasks);

            //     expect(tasks).toEqual(
            //         expect.arrayContaining(
            //             createdTasks.map((task) => expect.objectContaining({
            //                 _id: task._id,
            //                 assignee: task.assignee,
            //                 description: task.description,
            //                 priority: task.priority,
            //                 // Add other fields to check as needed
            //             }))
            //         )
            //     );
            // })
        })
    })
})