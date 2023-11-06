import { knex as setupKnex, Knex } from 'knex'
import path from 'path'

const dbPath = path.join(__dirname)
const dbFile = path.join(__dirname, 'app.db')

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: `${dbPath}/migrations`,
  },
}

export const knex = setupKnex(config)
