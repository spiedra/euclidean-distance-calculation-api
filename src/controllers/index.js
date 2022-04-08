export const getDataFromXls = async (req, res, next) => {
  try {
      res.json({
          status: 200, 
          txt: "hola"
      })
  } catch (error) {
    res.json({ status: 500, message: error });
  }
};
