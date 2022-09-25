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
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const path_1 = __importDefault(require("path"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const work_hours_routes_1 = __importDefault(require("./routes/work-hours.routes"));
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
        // this.app.use(express.json());
        // this.app.use(express.urlencoded({extended: false}));
        // for base64
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(express_1.default.static(path_1.default.resolve('./assets')));
        // this.app.use('/assets/email', express.static(path.join(__dirname, './assets/email.txt')));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/api/login', login_routes_1.default);
        this.app.use('/api/employee', employee_routes_1.default);
        this.app.use('/api/workHours', work_hours_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Serve on port`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
