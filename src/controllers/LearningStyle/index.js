const getEuclideanDistanceCalculation = async (req, res, next) => {
  try {
    const inputs = req.body

    res.status(200).json({
      inputs: inputs
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = getEuclideanDistanceCalculation
