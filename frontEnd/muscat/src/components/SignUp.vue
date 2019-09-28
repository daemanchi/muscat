<template>
  <div class="login">
    <div class="login-container">
      <div class="login-box-wrap">
        <!--제목-->
        <div class="title-wrap">
          <h1>회원가입</h1>
        </div>
        <!--닉네임-->
        <div class="login-wrap">
          <!--닉네임-->
          <div class="txtbox-wrap">
            <input
              type="text"
              value
              v-model="userName"
              placeholder="닉네임"
              class="txtbox"
              @keyup="nameKeyup()"
              ref="userName"
            />
            <!--닉네임 Msg-->
            <div class="msg-wrap">
              <!-- <i class="muscat-icon-cancel err" :style="{display : nameErrView}"></i> -->
              <!-- <i
                class="muscat-icon-cancel err"
                :class="{ 'ok-view': viewFlag, 'err-view': viewFlag }"
              ></i>-->
              <i
                class="muscat-icon-cancel err"
                :class="{ 'ok-view': viewFlag, 'err-view': viewFlag }"
              ></i>
              <input type="text" v-model="userNameMsg" class="msg" disabled />
            </div>
          </div>
          <div class="space"></div>
          <!--ID-->
          <div class="txtbox-wrap">
            <input
              type="text"
              value
              v-model="userId"
              placeholder="이메일"
              class="txtbox"
              @keyup="idKeyup()"
              ref="id"
            />
            <!--ID Msg-->
            <div class="msg-wrap">
              <i
                class="muscat-icon-cancel err"
                :class="{ 'ok-view': idViewFlag, 'err-view': idViewFlag }"
              ></i>
              <input type="text" v-model="userIdMsg" class="msg" disabled />
            </div>
          </div>
          <div class="space"></div>
          <!--PWD-->
          <div class="txtbox-wrap">
            <input
              type="password"
              v-model="userPwd"
              placeholder="비밀번호"
              class="txtbox"
              @keyup="pwKeyup()"
              ref="userPwd"
            />
            <div class="msg-wrap">
              <i
                class="muscat-icon-cancel err"
                :class="{ 'ok-view': pwViewFlag, 'err-view': pwViewFlag }"
              ></i>
              <input type="text" v-model="userPwMsg" class="msg" disabled />
            </div>
            <div class="space"></div>

            <input
              type="password"
              v-model="userPwd2"
              placeholder="비밀번호확인"
              class="txtbox"
              @keyup="pw2Keyup()"
              ref="userPwd2"
            />
            <div class="msg-wrap">
              <i
                class="muscat-icon-cancel err"
                :class="{ 'ok-view': pw2ViewFlag, 'err-view': pw2ViewFlag }"
              ></i>
              <input type="text" v-model="userPwMsg2" class="msg" disabled />
            </div>
          </div>
          <!--버튼-->
          <div class="btn-wrap">
            <div class="signin-wrap">
              <button class="btn" @click="signUp">가입하기</button>
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
      userPwd2: "",
      userName: "",
      userIdMsg: "",
      userNameMsg: "",
      userPwMsg: "",
      userPwMsg2: "",
      viewFlag: true,
      idViewFlag: true,
      pwViewFlag: true,
      pw2ViewFlag: true,
      nameViewFlag: true
    };
  },
  methods: {
    idKeyup() {
      var u_email = this.userId;
      if (!u_email) {
        this.userIdMsg = "이메일 주소가 입력되지 않았습니다";
        this.idErrViewStyle();

        this.$refs.id.focus();
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
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    pwKeyup() {
      var u_pwd = this.userPwd;
      if (u_pwd == "") {
        this.userPwMsg = "비밀번호가 입력되지 않았습니다.";
        this.pwErrViewStyle();
        this.$refs.userPwd.focus();
        return false;
      } else {
        this.userPwMsg = "";
        this.pwOkViewStyle();
      }
    },
    pw2Keyup() {
      var u_pwd = this.userPwd2;
      if (u_pwd == "") {
        this.userPwMsg2 = "비밀번호 확인이 입력되지 않았습니다.";
        this.pwErrViewStyle2();
        this.$refs.userPwd2.focus();
        return false;
      } else {
        this.userPwMsg2 = "";
        this.pwOkViewStyle2();
      }
    },
    nameKeyup() {
      var u_name = this.userName;
      if (u_name == "") {
        this.userNameMsg = "닉네임이 입력되지 않았습니다.";
        this.errViewStyle();
        this.$refs.userName.focus();
        return false;
      } else {
        this.userNameMsg = "";
        this.okViewStyle();
      }
    },
    pwErrViewStyle() {
      this.pwViewFlag = false;
    },
    pwErrViewStyle2() {
      this.pw2ViewFlag = false;
    },
    nameErrViewStyle() {
      this.nameViewFlag = false;
    },
    idErrViewStyle() {
      this.idViewFlag = false;
    },
    errViewStyle() {
      this.viewFlag = false;
    },
    okViewStyle() {
      this.viewFlag = true;
    },
    idOkViewStyle() {
      this.idViewFlag = true;
    },
    pwOkViewStyle() {
      this.pwViewFlag = true;
    },
    pwOkViewStyle2() {
      this.pw2ViewFlag = true;
    },
    nameOkViewStyle() {
      this.nameViewFlag = true;
    },
    // OkViewStyle() {
    //   this.idErrView = "none";
    // },
    // pwOkViewStyle() {
    //   this.pwErrView = "none";
    // },
    // pwOkViewStyle2() {
    //   this.pwErrView2 = "none";
    // },
    // nameOkViewStyle() {
    //   this.nameErrView = "none";
    // }, 
    signUp() {
      this.nameKeyup();
      this.idKeyup();
      this.pwKeyup();
      this.pw2Keyup();
       
        // var token = this.$store.state.auth.token
        // var xhr = new XMLHttpRequest();
        // xhr.open('post','http://localhost:9000/signup',true);
        // xhr.onreadystatechange = ()=>{
        //   if(xhr.readyState === 4 && (xhr.status ===200 || xhr.status ===201)){
        //     this.$router.push({name:'Login'})
        //   }else if(xhr.readyState === 4 && xhr.status !==200){
        //     alert('중복된 이메일입니다. 다른 이메일로 입력하시기 바랍니다.')
        //   }
        // }
        // // var params = 'token='+token+'&content='+this.content
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.send(JSON.stringify({
        //   userName: this.userName,
        //   password: this.userPwd,
        //   userId: this.userId
        // }))

      this.$axios.post(`http://localhost:9000/signup`,
        {
          userName: this.userName,
          password: this.userPwd,
          userId: this.userId
        }
        )
        .then((result) => {
          this.$router.push({name:'Login'})
        })
        .catch((err) => {
          alert('중복된 이메일입니다. 다른 이메일로 입력하시기 바랍니다.')
        })
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
  opacity: 0.5;
  /* background-color: #707070; */
  border-bottom: 1px solid #000000;
  width: 328px;
  color: #000;
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
  height: 40px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  border-radius: 2px;
  background-color: #88d091;
  border: 0;
  padding: 10px 0;
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
.err-view {
  display: inline-block;
}
.ok-view {
  display: none;
}
</style>
