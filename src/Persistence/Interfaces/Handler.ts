import {Entity} from './Entity'

export interface Handler {
    handlerSaveAction(entity : Entity) : Promise<void>
}