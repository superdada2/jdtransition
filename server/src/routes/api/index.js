import express from 'express';
import tableRouter from './table'
import fieldRouter from './field'
import translationRouter from './translation'
import {loadData} from './initiate'

export const router = express.Router();

router.use('/table', tableRouter)
router.use('/field', fieldRouter)
router.use('/translation', translationRouter)
router.get('/load', async(req, res) => {

  loadData()
  res
    .status(500)
    .json('test')
})

export default router;

// router.post('/getHistory', (req, res, next) => {   Authorize(req, res, next,
// [{     type: 4,     role: 2   }]) }, async(req, res) => {   try {
// console.log(req.body)     const result = await GetHistory(req.body)
// res.status(200).json(result)   } catch (err) {     const message =
// err.message     console.log("error", message)     res.status(500).json({
//  status: false,       message     })   } })