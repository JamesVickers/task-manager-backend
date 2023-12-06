import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Task from '../models/task';
import { Priority } from '../types/types';

const createTask = (req: Request, res: Response, next: NextFunction) => {
    const {
        assignee,
        description,
        priority
    }: {
        assignee: string,
        description: string,
        priority: Priority
    } = req.body;

    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        assignee,
        description,
        priority,
    });

    return task
        .save()
        .then((result) => {
            return res.status(201).json({ // 201 created
                message: 'Task created successfully.',
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
                message: 'Tasks retrieved successfully.',
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

const updateTask = (req: Request, res: Response, next: NextFunction) => {
    const {
        _id,
        assignee,
        description,
        priority
    }: {
        _id: string,
        assignee: string,
        description: string,
        priority: Priority
    } = req.body;

    const updateParams: { assignee?: string, description?: string, priority?: Priority } = {};

    if (assignee !== undefined) {
        updateParams.assignee = assignee;
    }
    if (description !== undefined) {
        updateParams.description = description;
    }
    if (priority !== undefined) {
        updateParams.priority = priority;
    }

    // Option to set new:true is we want the updated document returned, as by default mongoose returns the old document ad it was before the update
    Task.findByIdAndUpdate({ _id }, { $set: updateParams }, { new: true })
        .exec()
        .then((result) => {
            return res.status(200).json({
                message: 'Tasks updated successfully.',
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

const deleteTask = (req: Request, res: Response, next: NextFunction) => {
    const { _id }: { _id: string } = req.body;

    Task.findByIdAndDelete({ _id })
        .exec()
        .then((result) => {
            return res.status(200).json({
                message: 'Task deleted successfully.',
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

const deleteTasks = (req: Request, res: Response, next: NextFunction) => {
    const { ids } = req.body;

    Task.deleteMany({ _id: { $in: ids } })
        .exec()
        .then((result) => {
            return res.status(200).json({
                message: `${result.deletedCount} tasks deleted successfully.`
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
    getAllTasks,
    updateTask,
    deleteTask,
    deleteTasks
};