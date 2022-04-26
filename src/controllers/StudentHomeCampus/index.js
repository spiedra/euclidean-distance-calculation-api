const getCalculationEuclideanDistance = require('../../utils/getCalculationEuclideanDistance')
const getDataFromSpreadsheet = require('../../utils/getDataFromSpreadsheet')

const getStudentCampus = async (req, res, next) => {
  try {
    const values = req.body.inputs // Inputs from the form
    const inputs = {
      Sexo: values.genre,
      Promedio: values.gpa,
      Estilo: values.learningStyle
    }
    const dataFromDataBase = await getDataFromSpreadsheet().EstiloSexoPromedioRecinto // Data from the excel
    const columnsToEvaluate = ['Sexo', 'Promedio', 'Estilo'] // Columns of the excel
    const requestedData = 'Recinto' // The result I want to get from excel

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

module.exports = getStudentCampus
