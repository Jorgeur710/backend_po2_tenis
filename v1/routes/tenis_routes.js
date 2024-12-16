const express = require('express');
const tenisController = require('../../controllers/tenisController')
const routes = express.Router()

routes.get("/",tenisController.getMatches),
routes.get("/finalizados",tenisController.getMatchesEnded),
routes.get("/pendientes",tenisController.getMatchesPending);
routes.patch("/:id",tenisController.patchPartido);

//routes.post("/",tenisController.createMatch)

module.exports = routes
