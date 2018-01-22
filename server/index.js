const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require("cors"),
    app = express(),
    ctrl = require("./controller"),
    port = 3001;

app.use(bodyParser.json());
app.get("/api/theater",ctrl.read)
app.delete('/api/theater/:id',ctrl.delete)
app.post('/api/theater/review',ctrl.update)

app.listen(port, () => console.log (`listening on port ${port}`));
    