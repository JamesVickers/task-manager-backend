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
    });

    afterEach(async () => {
        // Remove test data after each test
        await TaskModel.deleteMany({});
    });

    describe('/tasks/get/all: ', () => {
        describe('given a valid request: ', () => {
            const getAllTasksEndpoint = '/tasks/get/all';
            
            it('should return code 200', async () => {
                const response = await request(app).get(getAllTasksEndpoint).send();
                
                expect(response.statusCode).toBe(200);
            })
            it('should return the correct success message', async () => {
                const { body: { message: responseMessage } } = await request(app).get(getAllTasksEndpoint).send();

                expect(responseMessage).toEqual('Tasks retrieved successfully.');
            })
            it('should return an array of with the correct number of tasks', async () => {
                const { body: { count: responseCount } } = await request(app).get(getAllTasksEndpoint).send();

                expect(responseCount).toEqual(createdTasks.length);
            })
            it('should return tasks with correct properties and values', async () => {
                const { body: { tasks: responseTasks } } = await request(app).get(getAllTasksEndpoint).send();

                expect(responseTasks).toEqual(
                    expect.arrayContaining(
                        createdTasks.map((task) => expect.objectContaining({
                            _id: String(task._id),
                            assignee: task.assignee,
                            description: task.description,
                            priority: task.priority,
                        }))
                    )
                );
            })
        })
    })
})