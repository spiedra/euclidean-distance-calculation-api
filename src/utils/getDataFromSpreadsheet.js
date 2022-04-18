const XLSX = require('xlsx')
const { join } = require('path')

const getDataFromSpreadsheet = () => {
  try {
    const workbook = XLSX.readFile(join(__dirname, '../../', 'data.xlsx'))

    // Convert the XLSX to JSON
    const worksheets = {}
    for (const sheetName of workbook.SheetNames) {
      worksheets[sheetName] = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetName]
      )
    }

    return worksheets
  } catch (error) {
    return error
  }
}

module.exports = getDataFromSpreadsheet
