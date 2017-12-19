import express from 'express';
import {getTranslationByFieldId, saveComment, getSourceTables, addTranslation} from './controller'
export const router = express.Router();

export default router;

router.post('/getSourceTables', async(req, res) => {
  try {

    const result = await getSourceTables(req.body)
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

router.post('/getTranslationByFieldId', async(req, res) => {
  try {

    const result = await getTranslationByFieldId(req.body)
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

router.post('/addTranslation', async(req, res) => {
  try {

    const result = await addTranslation(req.body)
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