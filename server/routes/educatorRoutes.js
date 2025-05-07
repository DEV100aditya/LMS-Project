import express from 'express'
import { upadateRoleToEducator } from '../controllers/educatorController.js'

const educatorRouter = express.Router()

// add Educator Role
educatorRouter.get('/update-role', upadateRoleToEducator)

export default educatorRouter;