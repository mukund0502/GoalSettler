const express = require("express")
const router = express.Router()
const {getgoals, postgoals, putgoals, deletegoals} = require('../controllers/goalcontroller')

router.get('/', getgoals)

router.post('/', postgoals)

router.put('/:id', putgoals)

router.delete('/:id', deletegoals)


module.exports = router 