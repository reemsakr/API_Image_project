import express, { Application, Request, Response } from 'express';

import routes from './routes/index';

//port number
const port = 5000;
//create a server
const app: Application = express();
//add routing
app.use('/api', routes);

//start server
app.listen(port, () => {
  console.log(`server has been started in port :${port}`);
});

export default app;
