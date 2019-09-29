<template>
  <div>
      <router-link :to="{ path: 'myStickerSetting'}">myStickerSetting</router-link>
      <StickerBoard goalCnt="30"/>
      <div>
          <ul class="mylist">
          <li @click="clickEvtHandler('rePw')">비밀번호 재설정</li>
          <li @click="clickEvtHandler('logout')">로그아웃</li>
          <li @click="clickEvtHandler('resignMember')">회원탈퇴</li>
          <li @click="clickEvtHandler('serviceInfo')">서비스이용약관</li>
          </ul>
      </div>
    </div>
</template>
<script>
import StickerBoard from './StickerBoard'
export default {
     data(){
        return{

        }
    },
    components :{
      'StickerBoard'  : StickerBoard
    },
    created(){
     
    },
    methods : {
      clickEvtHandler(type) {
        switch(type){
          case 'rePw' :

            break;
           case 'logout' :
             localStorage.clear()
             this.$router.push('/')

            break;
           case 'resignMember' :

            break;
           default:
             
            break;
        }
      }
    }
}
</script>
<style scoped>
.rectangle {
  height: 272px;
  border-radius: 2px;
  box-shadow: 0 5px 38px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}
.cog-solid {
  width: 19.4px;
  height: 20.3px;
  object-fit: contain;
  background-color: var(--primary-dark);
  color: #87bf8e;
}
ul.mylist, ol.mylist {
    list-style: none;
    max-width: 250px;
    width: 100%;
    padding: 5px 0px 5px 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #efefef;
    font-size: 12px;
}
ul.mylist li:last-child,
ol.mylist li:last-child {
    border-bottom: 0px;
}
ul > li {
    margin-bottom : 10px;
    text-align : -webkit-left;
}
</style>

