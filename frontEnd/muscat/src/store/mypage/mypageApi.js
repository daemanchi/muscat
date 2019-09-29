import axios from 'axios'
const hostUrl = `http://localhost:9000`
/*const urls = {

}*/
const mypage = {
    //로그아웃
    logoutProc(){
        localStorage.clear();
        this.$router.push('home')
    },
    //회원탈퇴
    widhdrawMemberProc(){
        //let user = localStorage.getItem('user');

      //  axios.post('')

    },
    commonErrorFnc(){
        console.log('error.')
    },
    saveStickerRule(param, rules, cbFnc) {
      let data = {}
      data['sticker'] = param
      data['rules'] = rules
        
      axios.post(`${hostUrl}/blog/rule`, data)
        .then((result)=>{
            return cbFnc(result.status)
      }).catch((error) => {
        console.log(error)
      })
    }
}

export default mypage