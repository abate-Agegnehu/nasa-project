const launches = new Map();

let latestFilghtNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explore IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function geAllLaunches() {
  return Array.from(launches.values());
}

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}
function addNewLaunch(launch) {
  latestFilghtNumber++;
  launches.set(
    latestFilghtNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Zero to Mastery", "NASA"],
      flightNumber: latestFilghtNumber,
    })
  );
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  geAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};
