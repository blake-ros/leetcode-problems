// Question:

// 1436. Destination City
// Easy

// 105

// 10

// Add to List

// Share
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there
// exists a direct path going from cityAi to cityBi.Return the destination city,
// that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop,
// therefore, there will be exactly one destination city.



//   Example 1:

// Input: paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is
// the destination city.Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".








// Answer:

var destCity = function (paths) {
  const targetCities = {};

  for (let i = 0; i < paths.length; i++) {
    targetCities[paths[i][0]] = targetCities[paths[i][0]] ? targetCities[paths[i][0]] - 1 : -1;
    targetCities[paths[i][1]] = targetCities[paths[i][1]] ? targetCities[paths[i][1]] + 1 : 1;
  }

  for (let key in targetCities) {
    if (targetCities[key] === 1) {
      return key;
    }
  }
};
