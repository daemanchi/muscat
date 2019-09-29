<template>
   <div  class="flex_container">
    <form>
      <div><input type="text" class="path" placeholder="목표" v-model="title"/></div>
      <p v-if="errorBag.title">{{errorBag.title[0]}}</p>
      <div>
        <StickerBoard goalCnt="30"/>
      </div>
      <div>
        <ul>
          <li v-for="(chk,index) in chkList" v-bind:key="index">
            <label>{{chk.cdNm}}</label><input type="checkbox" value="chk.cd" v-model="chk.checked"/>
          </li>
        </ul>
      </div>
      <div>
        <input type="text" class="path" placeholder="보상" v-model="goalCont"/>
         <p v-if="errorBag.goalCont">{{errorBag.goalCont[0]}}</p>
      </div>
      <div>
        <div>기간</div>
        <div style="display:inline-flex;">
          <datepicker class="cal" v-model="startDate" :language="ko" :format="customFormatter" ></datepicker>
        ~ <datepicker class="cal" v-model="endDate"   :language="ko" :format="customFormatter" ></datepicker>
        </div> 
      </div>
      <div style="text-align:right;">
        <button @click="saveSticker"> <label class="teal_Normal">목표설정</label> </button>
      </div>
    </form>
   </div>
</template>
<script>
import Api from '../../store/mypage/mypageApi'
import StickerBoard from './StickerBoard'
import Datepicker from 'vuejs-datepicker'
import validator from '../../utils/validator'
import {ko} from 'vuejs-datepicker/dist/locale'
export default {
    name : 'myStickerSetting', 
    components :{
       StickerBoard,
       Datepicker,
    },
     data(){
         return {
           chkList :[
             {cd: '01', cdNm :'새로운 글을 작성할 때마다', checked: false},
             {cd: '02', cdNm :'댓글을 작성할 때마다' , checked: false},
             {cd: '03', cdNm :'좋아요 10개마다' , checked: false},
             {cd: '04', cdNm :'조회수 100번마다' , checked: false},
             {cd: '05', cdNm :'7일 연속으로 접속 달성', checked: false},
             {cd: '06', cdNm :'링크가 공유될 때마다', checked: false},

            ],
            startDate  : new Date(),
            endDate    : new Date(),
            goalCont    :'',
            title : '',
            stickerGoal : {
              stkStartDate  : '',
              stkEndDate : '',
              stkTypeCd : '01',
              usrId: '',
              stkGoalCnt: 30
            },
            rules :[],
            ko :ko,
            errorBag: { goalCont: [], title : [] },
          }
         
     },
     watch :{
       goalCont (val) {
         this.errorBag.goalCont = validator.validate('goalCont', val)
       },
       title (val) {
        this.errorBag.title = validator.validate('title', val)
       }
     },
     methods : {
      customFormatter(date) {
        console.log("date===>>>"+date.toISOString().slice(0,10))
        let formtDate = [date.getFullYear(), ('0'+(date.getMonth()+1)).slice(-2), ('0'+(date.getDate())).slice(-2)]

        return formtDate.join('-')
      },
      saveSticker() {
        //validationChk
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user)
        let chks = []
        this.chkList.forEach((ele, idx)=>{
          if(ele.checked) {
            chks.push(ele.cd)
          }
        })
        if(!chks.length) {
          alert('') ;
          return false;
        }
        this.rules = chks
        this.stickerGoal.sktTitle = this.title
        this.stickerGoal.stkGoalContents = this.goalCont
        this.stickerGoal.stkStartDate = this.customFormatter(this.startDate).replace(/-/gi, '')
        this.stickerGoal.stkEndDate   = this.customFormatter(this.endDate).replace(/-/gi, '')
        this.stickerGoal.usrId = user.user_id
        
        Api.saveStickerRule(this.stickerGoal, this.rules, (result)=>{
          if(result == 200) {
            alert('save')
            this.$router.push('/')
          }
          
        })

      }
    }
}
</script>
<style>
.flex_container {
  display: flex;
  flex-direction:column;
}
ul {
  padding : 0;
  margin : .5rem;
}
li {
   list-style: none;
}
.path {
  width: 340.6px;
  height: 30px;
  margin : .5rem;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.86) 97%, #ffffff);
}
.cal {
  width: 140.6px;
  height: 30px;
  margin : .5rem;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.86) 97%, #ffffff);
}
button {
  width: 90px;
  height: 36px;
}
.teal_Normal {
  width: 48px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: var(--primary-dark);
}
</style>

