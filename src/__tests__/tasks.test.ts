import request from 'supertest'
import config from '../config/config';
import app from '../app';

describe('Tasks: ', () => {
    describe('getAllTasks | GET | /tasks/get/all: ', () => {
        describe('given a valid request: ', () => {
            it('should return response code 200', async () => {
                expect(true).toBe(true);
                const getAllTasksEndpoint = '/tasks/get/all';

                const response = await request(app).get(getAllTasksEndpoint).send();

                // console.log('response: ', response);
                expect(response.statusCode).toBe(200);
            })
        })
    })
})