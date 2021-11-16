import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3999

const jsonParser = bodyParser.json();

app.use(jsonParser);

export const listen = () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

}

export default app;
