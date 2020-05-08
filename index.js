// Code your solution in this file
function findMatching (names, name) {
    return names.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }
  
  function fuzzyMatch (names, partialName) {
    let lengthName = partialName.length;
    return names.filter(function (driverName) {
      return driverName.slice(0, lengthName) === partialName;
    });
  }
  
  function matchName (names, name) {
    return names.filter(function (drivers) {
      return drivers.name.toLowerCase() === name.toLowerCase();
    });
  }