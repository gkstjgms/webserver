const express = require("express");
const app = express();

import { log } from "./helloWorld";

const port = 3000;

app.listen(port, () => {
    log(`>>> App is listening on port ${port}!`);
});
