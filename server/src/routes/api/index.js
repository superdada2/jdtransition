import express from 'express';

export const router = express.Router();

export default router;



// router.post('/getHistory', (req, res, next) => {
//   Authorize(req, res, next, [{
//     type: 4,
//     role: 2
//   }])
// }, async(req, res) => {
//   try {
//     console.log(req.body)
//     const result = await GetHistory(req.body)
//     res.status(200).json(result)
//   } catch (err) {

//     const message = err.message
//     console.log("error", message)
//     res.status(500).json({
//       status: false,
//       message
//     })
//   }
// })