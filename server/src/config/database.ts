/* import {DataSource} from 'typeorm'

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3305,
    username: "root",
    password: "123456",
    database: "gestorasamblea",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})*/

import {createPool} from 'mysql2/promise' 
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
})