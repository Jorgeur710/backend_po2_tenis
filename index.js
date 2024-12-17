const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const routes = require('./v1/routes/tenis_routes');

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(express.json());
app.use(cors());

app.use("/api/v1/partidos",routes);

app.listen(port,()=> console.log(`listening on http://localhost:${port}`))