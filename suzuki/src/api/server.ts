import express, { json, urlencoded } from "express";
import cors from "cors";
import { api } from "./api";
import { Errors } from "../errors/errorHandler";

export const server = async (port: number) => {

    try {

        const app = express();
        
        app.use(cors(), json(), urlencoded({extended: true}));

        app.use(api());
        
        app.listen(port, () => {
            console.log('Suzuki on port', port);
        });

    } catch(error) {

        Errors.log(error, './server.ts server initialization');

    }
}

