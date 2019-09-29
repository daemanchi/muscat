const express = require('express');
const router = express.Router();
const models = require('../../models');
const sequelize = require('sequelize');
//사용자 설정 데이터 가져오기
router.get('/sticker/:usr_id',(req, res, next) => {
    const userId = req.params.usr_id;

    models.sticker.findAll({
       where: { id: userId}
      ,attributes:[[sequelize.fn('max', sequelize.col('rating')),'max']]
    }).then(( result )=>{
        res.send(result)
    }).catch(err => res.status(500).send(err));;
})

//사용자 설정데이터 등록
router.post('/sticker',(req, res, next) => {
    const stickerParam = req.body

    Sequelize.transaction(t => {
        models.sticker.create(stickerParam,  {isNewRecord:true, transaction: t}).then( (err, result) => {
          // Woops, the query was successful but we still want to roll back!
         // throw new Error();
        });
    });
})

//사용자 설정데이터 수정
router.put('/sticker/:skt_id',(req, res, next) => {
    const userId = req.params.skt_id;
})

//사용자 설정데이터 삭제
router.delete('/sticker/:usr_id',(req, res, next) => {
    const userId = req.params.usr_id;
})

module.exports = router;
