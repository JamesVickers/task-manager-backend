import express, { Express, Request, Response } from 'express';
import config from './config/config';

const app: Express = express();

/* Parse the requset - formally app.use(bodyParser.urlencoded... / bodyParser.json... */
app.use(express.urlencoded({ extended: false })); // Allows us to send nested json to the api
app.use(express.json()); // Means we don't have to call json.parse / json.stringify on the client side

/* Rules for the API */
// middleware
app.use((req: Request, res: Response, next) => {
    // requests can come form anywhere
    // MUST RESTRICT THIS TO PRE-DEFINED IPS AND ROUTES WHEN IN PRODUCTION
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        // allow users of the api to see accepted methods for the API
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        // just returns a status code of 200 meaning the method was accepted
        return res.status(200).json({});
    }

    next();
});

/* Routes */
app.use('/', (req: Request, res: Response) => {
    res.send('Task manager express server is running')
});

/* Error handling */
// middleware
// if API route not found
app.use((req: Request, res: Response, next) => {
    const error = new Error('Route not found');

    return res.status(404).json({
        message: error.message
    });
});

/* Create the server*/
app.listen(config.server.port, () => {
    console.log(`Server is running at http://localhost:${config.server.port}`);
});