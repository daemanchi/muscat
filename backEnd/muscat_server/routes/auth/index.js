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
            usrId: userId,
            usrPassword: createPasswordHash(password),
            usrNickName: userName,
            createId: 0,
            modifyId: 0
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
                'usrId',
                'usrEmail',
                'usrNickName',
                'usrPhotoFile',
                'usrStatCd',
                'createDttm'
            ],
            where: {
                usrEmail: userId,
                usrPassword: createPasswordHash(password)
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
