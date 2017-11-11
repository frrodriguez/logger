import {BaseRepository} from './BaseRepository'
import {LogEntry} from '../Models/LogEntry'
import {EntityRepository} from 'typeorm'

@EntityRepository(LogEntry)
export class LogRepository<LogEntry> extends BaseRepository<LogEntry> {
}