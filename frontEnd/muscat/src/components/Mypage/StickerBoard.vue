<template>
     <div class="rectangle">
        <div class="sticker on" v-for="index in stickerOnCnt" v-bind:key="index">
        </div>
        <div class="sticker" v-for="index in stickerCnt" v-bind:key="index">
        </div>
     </div>
</template>
<script>
export default {
  props :['goalCnt'],
  data(){
    return {
      stickerCnt : Number(this.goalCnt),
      stickerOnCnt : 0
    }
  }
  ,beforeCreate() {
  }
  ,created() {
    //스티커 갯수
    console.log(this.stickerCnt)
    this.stickerCnt = Number(this.goalCnt) - this.stickerOnCnt 
    
  }
}
</script>
<style scoped>
.rectangle {
  height: 272px;
  width : 340px;
  border-radius: 2px;
  box-shadow: 0 5px 38px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 1rem;
}
.sticker {
  width: 46.4px;
  height: 46.4px;
  object-fit: contain;
  background-color: #efe6e6;
  border-radius: 50%;
  float:left;
  margin: .1rem;
}
.on{
  width: 46.4px;
  height: 46.4px;
  object-fit: contain;
  background-image: linear-gradient(to bottom, #b8f2be, #fff940);
  border-radius: 50%;
}
</style>