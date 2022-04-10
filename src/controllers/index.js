const getDataFromSpreadsheet = require('../utils/index')

const getDataFromXls = async (req, res, next) => {
  try {
    const worksheets = await getDataFromSpreadsheet();

    res.status(200).json({
      worksheet: worksheets.RecintoEstilo,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = getDataFromXls;
