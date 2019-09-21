<template>
  <div class="wrapper">
    <div class="input-holder">
      <input placeholder="제목" v-model="title">
    </div>

    <div class="textarea-holder">
      <textarea placeholder="내용" v-model="contents"></textarea>
    </div>

    <div class="input-holder">
      <input placeholder="해시태그" v-model="tag">
    </div>

    <div class="input-holder" @click="onClickImageInput">
      <input placeholder="이미지 파일 첨부" disabled :value="fileName">
      <i v-if="file" @click.stop="file = null" class="muscat-icon-cancel" style="color: #dedede; margin-right: 8px;"></i>
      <i class="muscat-icon-camera" style="color: #87bf8e;"></i>
      <input ref="imageInput" style="display: none;" type="file" accept="image/*" @change="onFileChange">
    </div>

    <div class="button-holder">
      <button @click="submit('02')">임시저장</button>
      <button @click="submit('01')" class="submit">작성하기<i style="font-size: 24px; margin-left: 4px;" class="muscat-icon-feather color-gradient"></i></button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "WritePost",
    computed: {
      ...mapGetters('blog', ['blog']),
      fileName () {
        if (this.file) return this.file.name;
        else return '';
      },
    },
    data () {
      return {
        blogId: 0,
        title: '',
        contents: '',
        tag: '',
        file: null
      };
    },
    created () {
      if (this.blog) {
        this.blogId = this.blog.BLOG_ID;
        this.title = this.blog.BLOG_TITLE;
        this.contents = this.blog.BLOG_CONTENTS;
        this.tag = this.blog.BLOG_HASH_TAG;
        this.file = this.blog.BLOG_ATTA_FILE ? { name: this.blog.BLOG_ATTA_FILE } : null;
      }
    },
    watch: {
      blog: {
        handler (newVal) {
          console.log(newVal);
          this.blogId = newVal.BLOG_ID;
          this.title = newVal.BLOG_TITLE;
          this.contents = newVal.BLOG_CONTENTS;
          this.tag = newVal.BLOG_HASH_TAG;
          this.file = newVal.BLOG_ATTA_FILE ? { name: newVal.BLOG_ATTA_FILE } : null;
        },
        deep: true,
      }
    },
    methods: {
      ...mapActions('blog', ['createBlog', 'updateBlog']),
      onClickImageInput () {
        this.$refs.imageInput.click();
      },
      onFileChange (event) {
        this.file = event.target.files[0];
      },
      submit (status) {
        let root = this;
        if (this.blogId) {
          this.updateBlog({
            BLOG_ID: root.blogId,
            USR_ID: 1,
            BLOG_TITLE: root.title,
            // BLOG_ATTR_FILE: null,
            BLOG_HASH_TAG: root.tag,
            BLOG_CONTENTS: root.contents,
            BLOG_STAT_CD: status, // 01: 작성하기, 02: 임시저장
            MODIFY_DTTM: new Date().toISOString(),
            MODIFY_ID: 1
          }).then(response => {
            console.log(response);
            alert(status === '02' ? '임시저장되었습니다.' : '작성되었습니다.');
          }).catch(err => {
            console.error(err);
          });
        } else {
          this.createBlog({
            USR_ID: 1,
            BLOG_TITLE: root.title,
            // BLOG_ATTR_FILE: null,
            BLOG_HASH_TAG: root.tag,
            BLOG_CONTENTS: root.contents,
            BLOG_STAT_CD: status, // 01: 작성하기, 02: 임시저장
            CREATE_DTTM: new Date().toISOString(),
            CREATE_ID: 1,
            MODIFY_DTTM: new Date().toISOString(),
            MODIFY_ID: 1
          }).then(response => {
            console.log(response);
            alert(status === '02' ? '임시저장되었습니다.' : '작성되었습니다.');
          }).catch(err => {
            console.error(err);
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    min-height: calc(100vh - 56px);
    padding: 12px 17px;
    box-sizing: border-box;
  }

  input, textarea, button {
    outline: none;
  }

  .input-holder {
    background-color: white;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 18px;
    box-sizing: border-box;
    margin-bottom: 16px;
    & > input {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      line-height: 24px;
    }
  }

  .textarea-holder {
    background-color: white;
    height: auto;
    min-height: 375px;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 18px;
    box-sizing: border-box;
    margin-bottom: 16px;
    & > textarea {
      flex: 1 1 auto;
      border: none;
      width: 100%;
      height: 100%;
      min-height: 359px;
      resize: none;

      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      line-height: 24px;
    }
  }

  .button-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 17px;

    & > button {
      height: 36px;
      background: transparent;
      font-size: 14px;
      font-weight: 500;
      color: #707070;
    }

    .submit {
      color: #87bf8e;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .color-gradient {
      background: -webkit-gradient(linear, left top, left bottom, from(#fff940), to(#b8f2be));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
