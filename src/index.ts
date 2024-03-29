import express, { Express, NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import tasksRouter from './routes/tasks';

const app: Express = express();

/* Parse the requset - formally app.use(bodyParser.urlencoded... / bodyParser.json... */
app.use(express.urlencoded({ extended: false })); // Allows us to send nested json to the api
app.use(express.json()); // Means we don't have to call json.parse / json.stringify on the client side

/* Connect to Mongo using mongoose */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result: typeof mongoose) => {
        console.info('Connected to MongoDB');
    })
    .catch((error: Error) => {
        console.error(`error.message: ${error}`);
    });

/* Rules for the API */
// middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    // Todo: restrict this to pre-defined IPS if used in production
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

/* Routes */
app.use('/tasks', tasksRouter);

/* Error handling */
// middleware
// if API route not found
app.use((req: Request, res: Response, next: NextFunction) => {
    const error: Error = new Error('Route not found');
    return res.status(404).json({
        message: error.message
    });
});

/* Create the server*/
app.listen(config.server.port, () => {
    console.log(`Server is running at http://localhost:${config.server.port}`);
});