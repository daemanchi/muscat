<template>
    <div class="flex_container">
        <div>
            <UserInfo/>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import UserInfo from './UserInfo'
export default {
    name : 'MyPage',
    data(){
        return{
            
        }
    },
    components :{
      'UserInfo'  : UserInfo
    }
    ,created() {
       //console.log(this.id);
    },
    computed:{
      ...mapActions(['logout', 'withdrawMember']),
      ...mapGetters(['setSettings'])
    }
    ,methods : {
        clickEvtHandler(key) {
            switch(key){
                case 'a' :
                case 'd' :
                    alert('준비중입니다.')
                    break;
                case 'b' :
                    this.logout();
                    break;
                case 'c' :
                    if(confirm('회원탈퇴를 진행하시겠습니까?')) {
                        this.withdrawMember();
                    }
                    break;
            }
        }
    
    }
}
</script>
<style scoped>
.flex_container {
  display: flex;
  flex-direction:column;
  margin: 5px;
}
.flex_container > div {
    padding: .2rem;
}
</style>

