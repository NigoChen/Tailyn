"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// mysql
const morgan_1 = __importDefault(require("morgan"));
// cors
const cors_1 = __importDefault(require("cors"));
// routes
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const path_1 = __importDefault(require("path"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const work_hours_routes_1 = __importDefault(require("./routes/work-hours.routes"));
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const repair_routes_1 = __importDefault(require("./routes/repair.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // for base64
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
        // this.app.use(express.static(path.resolve('./assets')));
        // this.app.use('/assets/email', express.static(path.join(__dirname, './assets/email.txt')));
    }
    routes() {
        // this.ng_routes();
        // backend router
        // this.app.use('/', indexRoutes);
        this.app.use('/api/login', login_routes_1.default);
        this.app.use('/api/employee', employee_routes_1.default);
        this.app.use('/api/workHours', work_hours_routes_1.default);
        this.app.use('/api/repair', repair_routes_1.default);
        this.app.use('/api/client', client_routes_1.default);
        // 404
        this.app.use((req, res, next) => {
            // const error = new Error('not found');
            res.status(404).send('404');
        });
    }
    start() {
        mongoose_1.default.connect(config_1.mongoose_config.mongo.url, { retryWrites: true, w: 'majority' })
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
    ng_routes() {
        const uris = path_1.default.join(__dirname, './../tailyn/');
        const client_Path = express_1.default.static(uris);
        this.app.use(client_Path);
        const rex = '/:url(Tailyn/*|Tailyn|)/';
        this.app.get(rex, (req, res) => {
            res.sendFile('index.html', { root: path_1.default.join(__dirname, './../tailyn') });
        });
    }
}
const server = new Server();
server.start();
