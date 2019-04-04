// Code your solution in this file

const findMatching = (drivers, name) => {
    return drivers.filter(callback => callback.toLowerCase() === name.toLowerCase());
}
  
  const fuzzyMatch = (drivers, name) => {
    return drivers.filter(callback => callback.slice(0, name.length) === name);
}
  
  const matchName = (drivers, name) => {
    return drivers.filter(callback => callback.name.toLowerCase() === name.toLowerCase());
}