import express, { Application } from 'express';
// mysql
import morgan from 'morgan';
// cors
import cors from 'cors';
// routes
import indexRoutes from './routes/index.routes';
import employeeRoutes from './routes/employee.routes';
// import inventoryRoutes from './routes/inventoryRoutes';
// import recycleRoutes from './routes/recycleRoutes';
// import rmaRoutes from './routes/rmaRoutes';
import path from 'path';

class Server
{
    public app: Application;

    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void
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
        this.app.use('/api/employee', employeeRoutes);
        // this.app.use('/api/inventory', inventoryRoutes);
        // this.app.use('/api/rma', rmaRoutes);
        // this.app.use('/api/recycle', recycleRoutes);
    }

    start():void
    {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Serve on port`, this.app.get('port'));
        });
    }
}

const server = new Server();

server.start();