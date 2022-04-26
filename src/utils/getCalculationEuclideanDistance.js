
const defaultValues = {
  ASIMILADOR: 1,
  DIVERGENTE: 2,
  ACOMODADOR: 3,
  CONVERGENTE: 4,
  F: 1,
  M: 2,
  Promedio: 0,
  Turrialba: 1,
  Paraiso: 2
}

const getCalculationEuclideanDistance = (
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
