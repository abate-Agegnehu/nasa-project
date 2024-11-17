const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLounch,
  httpAbortLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLounch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
