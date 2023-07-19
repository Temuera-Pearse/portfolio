import connection from './connection'
import { Tem } from '../../models/tem'

export function getAllTems(db = connection): Promise<Tem[]> {
  return db('tem').select()
}
