import express from 'express';
import {getTableComments, getTables, saveComment} from './controller'
export const router = express.Router();

export default router;

router.get('/getTables', async(req, res) => {
  try {

    const result = await getTables(req.body)
    res
      .status(200)
      .json(result)
  } catch (err) {
    const message = err.message
    console.log("error", message)
    res
      .status(500)
      .json({status: false, message})
  }
})

router.get('/getTableComments', async(req, res) => {
  try {

    const result = await getTableComments(req.body)
    res
      .status(200)
      .json(result)
  } catch (err) {
    const message = err.message
    console.log("error", message)
    res
      .status(500)
      .json({status: false, message})
  }
})

router.post('/saveComment', async(req, res) => {
  try {

    const result = await saveComment(req.body)
    res
      .status(200)
      .json(result)
  } catch (err) {
    const message = err.message
    console.log("error", message)
    res
      .status(500)
      .json({status: false, message})
  }
})