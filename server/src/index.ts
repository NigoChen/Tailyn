import express, { Application } from 'express';
// mysql
import morgan from 'morgan';
// cors
import cors from 'cors';
// routes
import employeeRoutes from './routes/employee.routes';
import path from 'path';
import loginRoutes from './routes/login.routes';
import workHoursRoutes from './routes/work-hours.routes';
import clientRoutes from './routes/client.routes';
import repairRoutes from './routes/repair.routes';
import mongoose from 'mongoose';
import { mongoose_config } from './config';

class Server
{
    public app: Application;

    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void
    {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        // for base64
        this.app.use(express.json({limit: '50mb'}));
        this.app.use(express.urlencoded({limit: '50mb', extended: true}));
        // this.app.use(express.static(path.resolve('./assets')));
        // this.app.use('/assets/email', express.static(path.join(__dirname, './assets/email.txt')));
    }

    routes(): void
    {
        // this.ng_routes();
        // backend router
        // this.app.use('/', indexRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/employee', employeeRoutes);
        this.app.use('/api/workHours', workHoursRoutes);
        this.app.use('/api/repair', repairRoutes);
        this.app.use('/api/client', clientRoutes);
        // 404
        this.app.use((req, res, next) => {
            // const error = new Error('not found');
            res.status(404).send('404');
        });
    }

    start(): void
    {
        mongoose.connect(mongoose_config.mongo.url, { retryWrites: true, w: 'majority'})
        .then(() => {
            this.app.listen(this.app.get('port'), () => {
                console.log(`Connected to mongodb`);
                console.log(`Serve on port`, this.app.get('port'));
            });
        })
        .catch((error) => {
            console.log(`Serve Error`);
        });
    }

    ng_routes(): void 
    {
        const uris: string =path.join(__dirname, './../tailyn/');        
        const client_Path = express.static(uris);
        this.app.use(client_Path);
        
        const rex: string = '/:url(Tailyn/*|Tailyn|)/';
        this.app.get(rex, (req,res) =>{
            res.sendFile('index.html', {root:path.join(__dirname, './../tailyn')})
        });
    }
}

const server = new Server();

server.start();