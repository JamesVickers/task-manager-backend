import { Document } from 'mongoose';
import { Priority } from '../types/types';

export default interface ITask extends Document {
    assignee: string;
    description: string;
    priority: Priority;
}

