import express from 'express';

import apiRouter from './api';


export const router = express.Router();


router.use('/api/v1', apiRouter);
router.use('*', (req, res) => {
  console.log("Route Not Found", req.baseUrl)
  res.status(404).json({
    error: 'route not found'
  })
})


export default router;