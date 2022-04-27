const getCalculationEuclideanDistance = require('../../utils/getCalculationEuclideanDistance')
const getDataFromSpreadsheet = require('../../utils/getDataFromSpreadsheet')

const getTeacherType = async (req, res, next) => {
  try {
    const values = req.body.inputs // Inputs from the form
    const inputs = {
      A: values.age,
      B: values.genre,
      C: values.experience,
      D: values.numberTimesTeaching,
      E: values.backgroundDiscipline,
      F: values.computerSkills,
      G: values.expTechnologyTeaching,
      H: values.expWebsiteUse
    }

    const dataFromDataBase = await getDataFromSpreadsheet().Profesores // Data from the excel
    const columnsToEvaluate = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] // Columns of the excel
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

module.exports = getTeacherType
