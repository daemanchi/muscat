const express = require('express')
const Sequelize = require('sequelize')
const models = require('../../models')
const router = express.Router()

const User = models.tb_mcat_user

router.get('', (req, res) => {
    const transaction = models.sequelize.transaction
    console.log(transaction())
    // transaction(t => {
    //     // console.log(User.create)
    // })
    
    res.status(200).json({ result: true })
})

module.exports = router