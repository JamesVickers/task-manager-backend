import mongoose, { Schema } from 'mongoose';

export interface ITask extends mongoose.Document {
    _id: string;
    assignee: string;
    description: string;
    priority: number;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema: Schema = new Schema(
    {
        // _id: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     default: () => `_${v4()}`,
        // },
        assignee: { type: String, required: true },
        description: { type: String, required: true },
        priority: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

export const TaskModel = mongoose.model<ITask>("Task", TaskSchema);

