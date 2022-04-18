export const getCalculationEuclideanDistance = (
  dataFromDataBase,
  inputs,
  columnsToEvaluate,
  requestedData
) => {
  let result // Saves the requested data
  let closestToZero = 1000 // Saves the distance closest to zero

  for (const row of dataFromDataBase) {
    // Iterates each row of the excel file
    let sum = 0 // Saves the sum of two points squared
    let distance = 0 // Stores the temporal distance between the points
    for (const column of columnsToEvaluate) {
      // Iterates the columns to be evaluated according to the form
      sum += Math.pow(inputs[column] - row[column], 2) // Sum of point differences
    }

    distance = Math.sqrt(sum) // Square root of the sum
    if (distance < closestToZero) {
      // Compares to the distance closest to zero
      closestToZero = distance
      result = dataFromDataBase[requestedData] // The result is assigned according to the requested data
    }
  }

  return result
}
