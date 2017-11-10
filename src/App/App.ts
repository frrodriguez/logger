import * as express from 'express'
import "reflect-metadata";

import * as config from 'config'

import {createDatabase} from "../DataBase";
class App {
    
    public express
    public db

    constructor () {
        this.express = express()
        this.setMiddlewares()
        this.setRoutes()
    }

    static async build(){
        return new App()
    }

    private setMiddlewares(): void {
    }

    private setRoutes (): void {
        const router = express.Router()

        this.express.use('/', router)
    }
}

export default App