const express = requires ('express'),
    bodyParser = require('bodyparser'),
    cors = require ("cors"),
    app = express();
    port = 3001;

app.use(bodyParser.json());

app.listen(port, () => console.log (`listening on port ${port}`));
    