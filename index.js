// Code your solution in this file
const findMatching = (drivers, filter) => {
  return drivers.filter(each => each.toLowerCase() === filter.toLowerCase());
}

const fuzzyMatch = (drivers, providedLetters) => {
  return drivers.filter(each => each.slice(0, providedLetters.length) === providedLetters);
}

const matchName = (drivers, name) => {
  return drivers.filter(each => each.name.toLowerCase() === name.toLowerCase());
}