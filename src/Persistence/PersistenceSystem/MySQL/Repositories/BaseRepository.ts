import {Repository, Entity} from 'typeorm'
import {Handler} from '../../../Interfaces/Handler'

export class BaseRepository<T> extends Repository<T> implements Handler {

    handlerSaveAction(entity: any): Promise<void> {
        return this.save(entity)
    }
}