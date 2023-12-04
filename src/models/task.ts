import mongoose, { Schema } from 'mongoose';
import ITask from '../interfaces/task';

const TaskSchema: Schema = new Schema(
    {
        assignee: { type: String, required: true },
        description: { type: String, required: true },
        priority: { type: Number, required: true },
        completeByDate: { type: Date, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ITask>('Task', TaskSchema);
