import {PersistenceManager} from '../../Interfaces/PersistenceManager'
import {Connection} from 'typeorm'
import {Handler} from '../../Interfaces/Handler'
import * as config from 'config'

import {createConnection, ConnectionOptions} from 'typeorm'

import {LogRepository} from './Repositories'
import {Entities} from './Models'
const repositories = {
    LogRepository
}

const dbConfig : ConnectionOptions = {
    ...config.get('Persistence.Mysql.DataBaseConfigConnection'),
    entities : Entities
}


export class MySqlPersistenceManager implements PersistenceManager {

    private dbConnection : Connection;

    async init(): Promise<void> {
        if (!this.dbConnection){
            this.dbConnection = await createConnection(dbConfig)
        }
    }

    getHandler(forEntity: string): Handler {
        if(!this.dbConnection) 
            throw new Error("Must initialice PersistenceManager")
        
        if(!repositories[forEntity]) 
            throw new Error(`Tryng get a inexistent handler: ${forEntity}`)

        return this.dbConnection.getCustomRepository(repositories[forEntity])
    }

}