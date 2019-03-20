// Code your solution in this file
function findMatching(drivers, name) {
   let newDriver = []
 for (let i=0; i<drivers.length; i++) {
    if (drivers[i] == name  ) {
        newDriver.push(name)
    } 
    else if (drivers[i] == name.toLowerCase()){
        newDriver.push(name.toLowerCase())
    }
 }
 return newDriver
}

function fuzzyMatch(drivers, letters) {
    let newDriver =  drivers.filter(driver => driver.substring(0, 2) == letters);
    return newDriver
}

function matchName(drivers, name) {
    let newDriver = drivers.filter(driver=> driver.name === name);
    return newDriver
}