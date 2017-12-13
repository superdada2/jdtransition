import express from 'express';

import apiRouter from './api';
import authRouter from './auth';
import passport from 'passport';
import {
  loadInvoice
} from '../initialize'

export const router = express.Router();


router.use('/api/v1', passport.authenticate('auth', {
  session: false
}), apiRouter);
router.use('/auth', authRouter)
router.get('/loadInvoice', loadInvoice)
router.use('*', (req, res) => {
  console.log("Route Not Found", req.baseUrl)
  res.status(404).json({
    error: 'route not found'
  })
})


export default router;