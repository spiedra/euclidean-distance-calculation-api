const getCalculationEuclideanDistance = require('../../utils/getCalculationEuclideanDistance')
const getDataFromSpreadsheet = require('../../utils/getDataFromSpreadsheet')

const getLearningStyle2 = async (req, res, next) => {
  try {
    const values = req.body.inputs // Inputs from the form
    const inputs = {
      Recinto: values.campus,
      Promedio: values.gpa,
      Sexo: values.genre
    }
    const dataFromDataBase = await getDataFromSpreadsheet().EstiloSexoPromedioRecinto // Data from the excel
    const columnsToEvaluate = ['Recinto', 'Promedio', 'Sexo'] // Columns of the excel
    const requestedData = 'Estilo' // The result I want to get from excel

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

module.exports = getLearningStyle2
