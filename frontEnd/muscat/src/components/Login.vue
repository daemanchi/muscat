<template>
  <div class="login">
    <router-link to="/foo">Go to Foo</router-link>
    <router-view></router-view>
    <div class="login-container">
      <div class="login-box-wrap">
        <!--제목-->
        <div class="title-wrap">
          <h1>로그인이 필요합니다.</h1>
        </div>
        <!--로그인박스-->
        <div class="login-wrap">
          <!--ID-->
          <div class="txtbox-wrap">
            <input
              type="text"
              value
              v-model="userId"
              placeholder="아이디를 입력하세요"
              class="txtbox"
              @keydown="idKeydown()"
            />
            <!--ID Msg-->
            <div class="msg-wrap">
              <i class="muscat-icon-cancel err" :style="{display : idErrView}"></i>
              <input type="text" v-model="userIdMsg" class="msg" disabled />
            </div>
          </div>
          <div class="space"></div>
          <!--PWD-->
          <div class="txtbox-wrap">
            <input
              type="password"
              v-model="userPwd"
              placeholder="비밀번호를 입력하세요"
              class="txtbox"
              @keydown="pwKeydown()"
            />
            <div class="msg-wrap">
              <i class="muscat-icon-cancel err" :style="{display : pwErrView}"></i>
              <input type="text" v-model="userPwMsg" class="msg" disabled />
            </div>
          </div>
          <!--버튼-->
          <div class="btn-wrap">
            <div class="signin-wrap">
              <button class="btn" @click="login">로그인</button>
            </div>
            <div class="signin-wrap">
              <button class="btn" @click="signUp">회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userPwd: "",
      userIdMsg: "",
      userPwMsg: "",
      idErrView: "none",
      pwErrView: "none"
    };
  },
  methods: {
    idKeydown() {
      var u_email = this.userId;
      if (!u_email) {
        //this.$refs.userId.$el.focus(); //포커스 하는 방법
        this.userIdMsg = "이메일 주소가 입력되지 않았습니다";
        this.idErrViewStyle();
        return false;
      } else if (!this.validEmail(u_email)) {
        this.userIdMsg = "이메일 주소가 유효하지 않습니다";
        this.idErrViewStyle();
        return false;
      } else {
        this.userIdMsg = "";
        this.idOkViewStyle();
      }
    },
    validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    pwKeydown() {
      var u_pwd = this.userPwd;
      if (u_pwd === "") {
        this.userPwMsg = "비밀번호가 입력되지 않았습니다.";
        this.pwErrViewStyle();
        return false;
      } else {
        this.userPwMsg = "";
        this.pwOkViewStyle();
      }
    },
    idErrViewStyle() {
      this.idErrView = "inline-block";
    },
    pwErrViewStyle() {
      this.pwErrView = "inline-block";
    },
    idOkViewStyle() {
      this.idErrView = "none";
    },
    pwOkViewStyle() {
      this.pwErrView = "none";
    },
    login() {
      this.idKeydown();
      this.pwKeydown();

      //xhr
      //  var xhr = new XMLHttpRequest();
      //   xhr.open('post','http://localhost:9000/login',true);
      //   xhr.onreadystatechange = ()=>{
      //     if(xhr.readyState === 4 && (xhr.status ===200 || xhr.status ===201)){
      //       this.$router.push({name:'PostList'})
      //     }else if(xhr.readyState === 4 && xhr.status !==200){
      //       alert('로그인 정보를 확인하시기 바랍니다.')
      //     }
      //   }
        // var params = 'token='+token+'&content='+this.content
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.send(JSON.stringify({
        //  userId : this.userId,
        //  password : this.userPwd
        // }))

        this.$axios.post(`http://localhost:9000/login`,
        {
         userId : this.userId,
         password : this.userPwd
        })
        .then((result) => {
          console.log(result);
          this.$router.push({name:'PostList'})
        })
        .catch((err) => {
          console.error(err);
          alert('로그인 정보를 확인하시기 바랍니다.')
        })
    },
    signUp() {
      this.$router.push({name:'SignUp'})
    }
  }
};
</script>

<style>
* {
  font-family: "muscat";
}
input:focus {
  outline: none;
}
input:disabled {
  background: transparent;
}
.btn:hover {
  cursor: pointer;
}
.txtbox {
  border: 0;
  padding: 8px 0px;
  font-size: 16px;
  border-bottom: 1px solid #707070;
  width: 328px;
}
.space {
  height: 25px;
  width: auto;
}
.msg-wrap {
  text-align: left;
  padding-top: 5px;
}
.err {
  width: 17px;
  height: 15px;
  color: #b92d00;
}
.title-wrap {
  margin-bottom: 100px;
}
.login-form-text {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
}
#app {
  display: table;
  height: 100%;
  margin: 0 auto;
}
.login {
  display: table-cell;
  vertical-align: middle;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.btn {
  width: 330px;
  height: 36px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  border-radius: 2px;
  background-color: #88d091;
  border: 0;
}
.signin-wrap {
  margin-bottom: 10px;
}
.btn-wrap {
  margin-top: 70px;
}
.msg {
  border: 0;
  width: 330px;
  color: #b92d00;
}
</style>
