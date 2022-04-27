const getCalculationEuclideanDistance = require('../../utils/getCalculationEuclideanDistance')
const getDataFromSpreadsheet = require('../../utils/getDataFromSpreadsheet')

const getNetworkClassification = async (req, res, next) => {
  try {
    const values = req.body.inputs // Inputs from the form
    const inputs = {
      'Reliability (R)': values.reliability,
      'Number of links (L)': values.linksNumber,
      'Capacity (Ca)': values.networkCapacity,
      'Costo (Co)': values.networkCost
    }

    const dataFromDataBase = await getDataFromSpreadsheet().Redes // Data from the excel
    const columnsToEvaluate = [
      'Reliability (R)',
      'Number of links (L)',
      'Capacity (Ca)',
      'Costo (Co)'
    ] // Columns of the excel
    const requestedData = 'Class' // The result I want to get from excel

    res.status(200).json({
      result: getCalculationEuclideanDistance(
        dataFromDataBase,
        inputs,
        columnsToEvaluate,
        requestedData
      )
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = getNetworkClassification
