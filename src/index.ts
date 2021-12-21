//console.log("hi javier")

import "reflect-metadata";
import { connect } from "./config/typeorm";
import { startServer } from "./server"

async function main() {
    connect();
    const app = await startServer();
    app.listen(3000);
    console.log("Server on port 3000 - http://localhost:3000");
    console.log("http://localhost:3000/graphql");
}

main();