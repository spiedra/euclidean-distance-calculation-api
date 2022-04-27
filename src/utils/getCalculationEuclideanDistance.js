
const defaultValues = {
  ASIMILADOR: 1,
  ACOMODADOR: 2,
  DIVERGENTE: 3,
  CONVERGENTE: 4,
  M: 1,
  F: 2,
  Promedio: 0,
  Turrialba: 1,
  Paraiso: 2,
  NA: 3,
  B: 1,
  I: 2,
  A: 3,
  DM: 1,
  ND: 2,
  O: 3,
  L: 1,
  H: 2,
  N: 1,
  S: 2,
  Low: 1,
  Medium: 2,
  High: 3
}

const getCalculationEuclideanDistance = (
  dataFromDataBase,
  inputs,
  columnsToEvaluate,
  requestedData
) => {
  let result // Saves the requested data
  let closestToZero = 5000 // Saves the distance closest to zero

  for (const row of dataFromDataBase) {
    // Iterates each row of the excel file
    let sum = 0 // Saves the sum of two points squared
    let distance = 0 // Stores the temporal distance between the points
    for (const column of columnsToEvaluate) {
      // Iterates the columns to be evaluated according to the form
      sum += Math.pow(inputs[column] - (defaultValues[row[column]] || row[column]), 2) // Sum of point differences
    }

    distance = Math.sqrt(sum) // Square root of the sum
    if (distance < closestToZero) {
      // Compares to the distance closest to zero
      closestToZero = distance
      result = row[requestedData] // The result is assigned according to the requested data
    }
  }

  return result
}

module.exports = getCalculationEuclideanDistance
