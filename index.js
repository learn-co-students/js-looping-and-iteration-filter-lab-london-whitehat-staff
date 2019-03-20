// Code your solution in this file
const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
const fuzzyMatch = (drivers, name) => drivers.filter(driver => driver.toLowerCase().slice(0, name.length) === name.toLowerCase())
const matchName = (drivers, name) => drivers.filter(driver => driver.name === name)


//   describe('matchName()', function () {
//     it('accesses the data structure to check if name matches', function () {
//       const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];

//       expect(matchName(drivers, 'Bobby')).to.eql([
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh'
//         },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay'
//         }
//       ]);
//     });
//   });
// });
