import express from "express"
import * as contactController from '../controllers/contactController'

const router = express.Router()

router
.get("/", contactController.getAllContacts)
.get("/:id", contactController.getContactById)
.post("/", contactController.postContact)
.put("/:id",contactController.putContact)
.delete("/:id",contactController.deleteContact)

export default router