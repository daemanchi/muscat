<template>
    <div class="postlist">
        <h2 class="category">인기글</h2>
        <ul>
            <li v-for="post in list" :key="post.id"
                @click.prevent="$router.push(`/post/${post.id}`)"
                class="post_item">
                <div class="post_thumbnail">
                    <img :src="post.thumbnail" alt="포스트 썸네일">
                </div>
                <div class="post_content">
                    <strong class="post_title">{{ post.title }}</strong>
                    <p class="post_desc">{{ post.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import list from "@/assets/data/data.js";
export default {
    data () {
        return{
            list: {}
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.list = list
        }
    }
}
</script>

<style scoped>
    ul, li{
        list-style: none;
    }
    ul{
        margin-top: 8px;
        display: flex;
        overflow-x: scroll;
    }
    .postlist{
        margin: 0 auto;
        padding: 16px 20px;
        overflow-y: hidden;
        white-space: nowrap;
    }
    .post_item{
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        min-width: 340px;
        height: 300px;
    }
    .post_thumbnail > img{
        width: 100%;
        display: inline-block;
        vertical-align: top;
    }
    .post_item + .post_item{
        margin-left: 10px;
    }
    .post_thumbnail{
        width: 100%;
        height: 192px;
        overflow: hidden;
    }
    .post_content{
        padding: 18px;
    }
    .post_title{
        font-size: 24px;
    }
    .post_desc{
        margin-top: 4px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
</style>
