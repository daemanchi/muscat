const express = require('express');
const router = express.Router();
const models = require('../../models');
const Sequelize = require('sequelize');
// 목록 조회
router.get('/', function (req, res, next) {
  // console.log(req.query);
  models['tb_mcat_blog'].findAndCountAll({
    offset: (parseInt(req.query.page) - 1) * parseInt(req.query.count),
    limit: parseInt(req.query.count),
    where: {
      BLOG_STAT_CD: req.query.stat === 'draft' ? '02' : '01',
    }
  }).then(result => {
    console.log(result);
    res.send({
      rows: result.rows,
      count: result.count,
    });
  }).catch(err => {
    console.error(err);
  });
});

// 개별 조회
router.get('/:id', function(req, res, next) {
  models['tb_mcat_blog'].findOne({
    where: {
      BLOG_ID: req.params.id
    }
  }).then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => {
    console.error(err);
  });
});

// 생성
router.post('/', function (req, res, next) {
  // console.log(req.body);
  models['tb_mcat_blog'].create(req.body).then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => {
    console.error(err);
  });
});

// 수정
router.patch('/:id', function(req, res, next) {
  models['tb_mcat_blog'].update(req.body, {
    where: {
      BLOG_ID: req.params.id
    }
  }).then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => {
    console.error(err);
  });
});
//const resultJson = null
router.post('/rule',(req, res, next) => {
    let t = null
    let param = req.body;
    console.log(param);

    models.sequelize.transaction().then( transaction => {
      t = transaction;
      //이미 시작된 목표가 있나 없나 검증.
      
      return models.sticker.create(param.sticker, {isNewRecord:true, transaction: t})
    }).then( (result) =>{
      console.log(result.stkId)
      ruleList = [];
      param.rules.forEach((item) => {
        console.log(item)
        ruleList.push({
           stkId: result.stkId
          ,stkRuleTypeCd : item
          ,useYn : 'Y'
        })
      })

      return models.stickerRule.bulkCreate(ruleList, {individualHooks:true, transaction: t})
      //res.json(result)
    }).then((result) =>{
      t.commit()
      res.json(result)
    }).catch((err) => {
      console.log(err)
      if(t) {
       t.rollback() 
      }
    });

})
module.exports = router;

