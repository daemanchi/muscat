const express = require('express')
const Sequelize = require('sequelize')
const crypto = require('crypto')
const models = require('../../models')
const router = express.Router()

const User = models.tb_mcat_user
const sequelize = models.sequelize

// User.sync({ force: true })

router.post('/signup', (req, res) => {
    const { userName, password, userId } = req.body

    sequelize.transaction(() => {
        return User.create({
            USR_EMAIL: userId,
            USR_PASSWORD: createPasswordHash(password),
            USR_NICK_NAME: userName,
            CREATE_ID: 0,
            MODIFY_ID: 0
        })
    })
    .then(() => {
        res.status(200).json({
            result: true
        })
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    const { userId, password } = req.body

    sequelize.transaction(() => {
        return User.findOne({
            attributes: [
                'USR_ID',
                'USR_EMAIL',
                'USR_NICK_NAME',
                'USR_PHOTOFILE',
                'USR_STAT_CD',
                'CREATE_DTTM'
            ],
            where: {
                USR_EMAIL: userId,
                USR_PASSWORD: createPasswordHash(password)
            }
        })
    })
    .then(user => {
        if(!user) {
            throw new Error('아이디 혹은 패스워드를 확인해 주세요.')
        } else {
            req.session.user = user
            res.status(200).json({
                result: true
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

function createPasswordHash(password) {
    return crypto.createHash('sha512').update(password).digest('hex')
}

module.exports = router