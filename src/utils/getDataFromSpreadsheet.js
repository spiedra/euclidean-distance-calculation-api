const XLSX = require('xlsx')

const getDataFromSpreadsheet = () => {
  try {
    const workbook = XLSX.readFile('data.xlsx')

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
