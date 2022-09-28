import express, { Application } from 'express';
// mysql
import morgan from 'morgan';
// cors
import cors from 'cors';
// routes
import indexRoutes from './routes/index.routes';
import employeeRoutes from './routes/employee.routes';
import path from 'path';
import loginRoutes from './routes/login.routes';
import workHoursRoutes from './routes/work-hours.routes';
import standRoutes from './routes/stand.routes';

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
        // this.app.use(express.json());
        // this.app.use(express.urlencoded({extended: false}));
        // for base64
        this.app.use(express.json({limit: '50mb'}));
        this.app.use(express.urlencoded({limit: '50mb', extended: true}));
        this.app.use(express.static(path.resolve('./assets')));
        // this.app.use('/assets/email', express.static(path.join(__dirname, './assets/email.txt')));
    }

    routes():void
    {
        this.app.use('/', indexRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/employee', employeeRoutes);
        this.app.use('/api/workHours', workHoursRoutes);
        this.app.use('/api/stand', standRoutes);
    }

    start(): void
    {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Serve on port`, this.app.get('port'));
        });
    }
}

const server = new Server();

server.start();