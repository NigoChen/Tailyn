import { Router } from 'express';

class IndexRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config(): void
    {
        this.router.get('/', (req, res) => {
            res.send("Welcome To Tailyn");
            console.log(`===> ${process.cwd()}`);
            console.log(`===> ${__dirname}`);
        });
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;