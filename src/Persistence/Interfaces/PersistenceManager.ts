import {Handler} from './Handler'

export interface PersistenceManager {
    init() : void;
    getHandler( forEntity : string) : Handler;
}