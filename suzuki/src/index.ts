import express, { json, urlencoded } from "express";
import cors from "cors";
import { api } from "./api";

const port = 80;

const index = async () => {
    
    const app = express();
        
    app.use(cors(), json(), urlencoded({extended: true}));

    app.use(api());
    
    app.listen(port, () => {
        console.log('Suzuki on port', port);
    });
    
}

index().catch((error) => {
    console.error(error);
});
