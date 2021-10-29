// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
   
function findMatching(drivers, string) {
  let a = drivers.filter(el => el.toLowerCase() === string.toLowerCase())
  return a;
}
//findMatching(drivers, "Bobby")

function fuzzyMatch(driver, name) {
  let lengthOfName = name.length
  return driver.filter(el => el.slice(0,lengthOfName) === name)
 
}
function matchName (driver, name) {
  return driver.filter(el => el["name"] === name)
}