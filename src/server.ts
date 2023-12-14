import app from './app';
import config from './config/config';

/* Create the server*/
app.listen(config.server.port, () => {
    console.log(`Server is running at http://localhost:${config.server.port}`);
});