const express = require('express');
const port = process.env.PORT || 3000;
const routes = require('./v1/routes/tenis_routes');

const app = express();
app.use(express.json())
app.use("/api/v1/partidos",routes);

app.listen(port,()=> console.log(`listening on http://localhost:${port}`))