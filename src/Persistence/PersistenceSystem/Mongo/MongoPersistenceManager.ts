import {PersistenceManager} from '../../Interfaces/PersistenceManager'
import {Handler} from '../../Interfaces/Handler'
import * as config from 'config'

export class MongoPersistenceManager implements PersistenceManager {

    async init(): Promise<void> {}

    getHandler(forEntity: string): Handler {
       return null
    }

}