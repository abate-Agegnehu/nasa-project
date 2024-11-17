const {
  geAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  aboutLaunchById,
} = require("../../model/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(geAllLaunches());
}
function httpAddNewLounch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({ error: "Missing required launch property" });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: "Invalid launch date" });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}
function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!existsLaunchWithId(launchId)) {
    return res.status(400).json({ error: "Launch Not Found" });
  }
  const aborted = aboutLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpGetAllLaunches,
  httpAddNewLounch,
  httpAbortLaunch,
};