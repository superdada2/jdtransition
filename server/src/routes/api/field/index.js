import express from 'express';
import {getFieldByTableId, saveComment} from './controller'
export const router = express.Router();

export default router;

router.post('/getFieldByTableId', async(req, res) => {
  try {

    const result = await getFieldByTableId(req.body)
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