<template>
    <div>
        <div class="userWrap">
            <img v-bind:src="user.photo_path"  class="contact_photo">
            <div class="userWrap sub">
                <div class="contact_name">{{user.nick_name}}</div>
                <div class="primary_email">{{user.user_email}}</div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {
       user : {}
      }  
    },
    created() {
        console.log(localStorage.getItem('user'))
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}
</script>
<style scoped>
.contact_photo {
  width: 40px;
  height: 40px;
  background-color: #cccccc;
  border-radius: 50%;
}
.contact_name {
  width: 55px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
}
.primary_email {
  width: 105px;
  height: 19px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
}
.userWrap{
   display: -webkit-flex;
   padding-bottom : 10px;
}
.sub {
    display: inline-block;
    margin-left: 20px;
    vertical-align: top;
}
</style>

