import { createConnection } from 'typeorm'
import path from 'path'

//connect ORM
export async function connect() {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "javier",
        password: "2525_ap",
        database: "apigraphql",
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });
    console.log('DB is ready with postgres')
}
