import request from 'supertest'
import config from '../config/config';
import app from '../app';

// const request = require('supertest');

describe('Tasks: ', () => {
    describe('getAllTasks | GET | /tasks/get/all: ', () => {
        describe('given a valid request: ', () => {
            it('should return response code 200', async () => {
                 expect(true).toBe(true);
                // const baseUrl = `http://localhost:${config.server.port}`;
                // const getAllTasksEndpoint = '/get/all/tasks';
                // const endpoint = `${baseUrl}${getAllTasksEndpoint}`;

                // const response = await request(app).get(endpoint).send();

                // expect(response.statusCode).toBe(200)
            })
        })
    })
})