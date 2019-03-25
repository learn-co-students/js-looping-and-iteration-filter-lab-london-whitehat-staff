// Code your solution in this file

function findMatching(drivers, name) {
  let driverName = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  return driverName;
}

//pass in name and drivers argument from tests, similar to map but filter drivers [list], turn drivers into .toLowerCase. Make filter also match if case is not correct driver.toLowerCase() === name.toLowerCase()

function fuzzyMatch(drivers, letter) {
  let driverName = drivers.filter(driver => driver.slice(0,2) === letter)
  return driverName;
}

//pass in drivers and letter, filter drivers, chop all but the first 2 char, if a match is found it will be returned in the return.

function matchName(drivers, match) {
  let driverName = drivers.filter(driver => driver.name === match)
  return driverName;
}

//go through drivers, if it matches, return the matched names.
