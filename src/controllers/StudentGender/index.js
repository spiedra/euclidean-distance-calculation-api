const getCalculationEuclideanDistance = require('../../utils/getCalculationEuclideanDistance')
const getDataFromSpreadsheet = require('../../utils/getDataFromSpreadsheet')

const getStudentGenre = async (req, res, next) => {
  try {
    const values = req.body.inputs // Inputs from the form
    const inputs = {
      Recinto: values.campus,
      Promedio: values.gpa,
      Estilo: values.learningStyle
    }
    const dataFromDataBase = await getDataFromSpreadsheet().EstiloSexoPromedioRecinto // Data from the excel
    const columnsToEvaluate = ['Recinto', 'Promedio', 'Estilo'] // Columns of the excel
    const requestedData = 'Sexo' // The result I want to get from excel

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

module.exports = getStudentGenre
