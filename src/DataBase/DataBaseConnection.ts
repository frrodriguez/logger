import {createConnection} from "typeorm";

import * as config from 'config'

import {LogEntry} from "../Models";

const dbConf = config.get('DB')

export async function createDatabase () {

    const dbConfiguration : any = {
        ...dbConf
    }

    dbConfiguration.entities = [LogEntry] 
    
    let db = null
    try {
        db = await createConnection(dbConfiguration)
    } catch (e){
        throw new Error("Cant create connection")
    }

    return db
}