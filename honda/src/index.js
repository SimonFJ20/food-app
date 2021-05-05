const express = require('express');
const cors = require('express');

const port = 80;

(async () => {

    const app = express();

    app.use(cors(), express.json(), express.urlencoded({extended: true}));

    

    app.listen(port, () => {
        console.log('Honda on port', port);
    });

})().catch((error) => console.error(error));

