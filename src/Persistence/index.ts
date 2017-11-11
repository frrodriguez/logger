
import {MySqlPersistenceManager} from './PersistenceSystem/MySQL/MySqlPersistenceManager'
import {MongoPersistenceManager} from './PersistenceSystem/Mongo/MongoPersistenceManager'
import {FilePersistenceManager} from './PersistenceSystem/File/FilePersistenceManager'


const Persistence = MySqlPersistenceManager

export {
    Persistence
}