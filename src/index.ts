import express ,{Application ,Request,Response} from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import routes from './routes/index'; 
dotenv.config();
//port number
const port = process.env.port || 5000;
//create a server
const app :Application = express();

//http request midleware logger
app.use(morgan('dev'));
//add routing 
app.use('/api',routes);

//start server
app.listen(port ,()=>{
console.log(`server has been started in port :${port}`);
});

export default app;