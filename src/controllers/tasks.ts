import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Task from '../models/task';

const createTask = (req: Request, res: Response, next: NextFunction) => {
    let { 
        assignee,
        description,
        priority,
        completeByDate,
     } = req.body;

    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        assignee,
        description,
        priority,
        completeByDate,
    });

    return task
        .save()
        .then((result) => {
            // 201 created
            return res.status(201).json({
                task: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllTasks = (req: Request, res: Response, next: NextFunction) => {
    Task.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                count: results.length,
                tasks: results
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default {
    createTask,
    getAllTasks
};