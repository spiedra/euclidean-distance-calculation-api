const getCalculationEuclideanDistance = require('../../utils/getCalculationEuclideanDistance')
const getDataFromSpreadsheet = require('../../utils/getDataFromSpreadsheet')

const getEuclideanDistanceCalculation = async (req, res, next) => {
  try {
    const inputs = req.body.inputs // Inputs from the form
    const dataFromDataBase = await getDataFromSpreadsheet().RecintoEstilo // Data from the excel
    const columnsToEvaluate = ['CA', 'EC', 'EA', 'OR'] // Columns of the excel
    const requestedData = 'Estilo' // The result that I want to get

    res.status(200).json({
      result: getCalculationEuclideanDistance(dataFromDataBase, inputs, columnsToEvaluate, requestedData)
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = getEuclideanDistanceCalculation
