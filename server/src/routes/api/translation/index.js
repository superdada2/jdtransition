import express from 'express';
import {
  getTranslationByFieldId
} from './controller'
export const router = express.Router();

export default router;

router.post('/getTranslationByFieldId', async(req, res) => {
  try {

    const result = await getTranslationByFieldId(req.body)
    res.status(200).json(result)
  } catch (err) {
    const message = err.message
    console.log("error", message)
    res.status(500).json({
      status: false,
      message
    })
  }
})