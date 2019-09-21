<template>
  <div class="post_wrap">
    <div class="post_header">
      <div class="img_container">
        <img :src="post.thumbnail" alt="포스트 썸네일" />
      </div>
      <div class="header_desc">
        <span class="date">{{ post.createAt }}</span>
        <h1 class="title">{{ post.title }}</h1>
      </div>
    </div>
    <div class="post_main">
      <div class="user">
        <div class="user_img">
          <!-- img -->
        </div>
        <div class="user_desc">
          <strong class="username">{{ post.author }}</strong>
          <span class="useremail">{{ post.useremail }}</span>
        </div>
      </div>
      <span class="views">{{ post.views }} 번 조회</span>
      <p class="post_content">{{ post.desc }}</p>
      <div class="btn_wrap">
        <button type="button" class="btn_like" @click="likePost()">
          <i :class="[this.$store.state.postLiked ? 'muscat-icon-heart-solid' : 'muscat-icon-heart-regular']" style="color: #87bf8e;"></i>
        </button>
        <button type="button" class="btn_share">
          <i class="muscat-icon-share" style="color:#b8f2be;"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      post: {}
    }
  },
  computed: {
    ...mapGetters(['fetchData']),
  },
  created() {
    const id = this.$route.params.id - 1;
    this.post = this.fetchData(id)
  },
  methods: {
    likePost() {
      this.$store.commit('TOGGLE_LIKED', this.liked)
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
.post_header {
  height: 212px;
  color: rgba(255, 255, 255, 0.87);
  position: relative;
}
.img_container {
  height: 100%;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }
}

.header_desc {
  position: absolute;
  left: 16px;
  bottom: 15px;

  .date {
    font-size: 12px;
  }

  .title {
    font-size: 24px;
    line-height: 1.33;
    font-weight: bold;
  }
}
.post_main {
  overflow: hidden;
  position: relative;
  margin: 16px 16px 38px;
  font-size: 14px;
  color: #333;

  .views {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 10px;
    line-height: 1.3;
  }

  .post_content {
    margin-top: 15px;
    line-height: 1.43;
  }
}

.user {
  overflow: hidden;

  .user_img {
    float: left;
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 50%;
  }

  .user_desc {
    overflow: hidden;
    padding-left: 9px;
  }

  .username {
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    line-height: 1.31;
  }

  .useremail {
    display: block;
    font-size: 14px;
    line-height: 1.36;
  }
}

.btn_wrap {
  float: right;
  margin-top: 8px;

  .btn_like {
    vertical-align: top;
  }
  .btn_like i{
    font-size: 21px;
  }
  .muscat-icon-heart-solid:before{
    background-image: linear-gradient(to bottom, #b8f2be, #fff940);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .btn_share {
    margin-left: 14px;
    vertical-align: top;
  }
  .btn_share i{
    font-size: 24px;
  }
}
</style>
