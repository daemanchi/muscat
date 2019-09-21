import axios from 'axios';

const state = {
  drafts: [],
  blogs: [],
  blog: {
    BLOG_ID: 0,
    USR_ID: 0,
    BLOG_TITLE: '',
    BLOG_CONTENTS: '',
    BLOG_STAT_CD: '',
    BLOG_TYPE_CD: '',
    BLOG_HASH_TAG: "",
    BLOG_ATTA_FILE: "",
    BLOG_LIKE_CNT: 0,
    BLOG_VIEW_CNT: 0,
    USE_YN: "",
    CREATE_DTTM: '',
    CREATE_ID: 0,
    MODIFY_DTTM: '',
    MODIFY_ID: 0
  }
};

const getters = {
  drafts: state => state.drafts,
  blogs: state => state.blogs,
  blog: state => state.blog,
};

const actions = {
  selectBlogs (context, { page, count, stat }) {
    return axios.get('/blog', {
      params: {
        page, count, stat
      }
    });
  },
  selectBlog (context, blogId) {
    return axios.get( `/blog/${blogId}`);
  },
  createBlog (context, blog) {
    return axios.post('/blog', blog);
  },
  updateBlog (context, blog) {
    return axios.patch(`/blog/${blog.BLOG_ID}`, blog);
  }
};

const mutations = {
  SELECT_BLOGS (state, { stat, response }) {
    if (stat === 'draft') {
      response.config.params.page === 1 ? state.drafts = response.data.rows : state.drafts.push(...response.data.rows);
    } else {
      response.config.params.page === 1 ? state.blogs = response.data.rows : state.blogs.push(...response.data.rows);
    }
  },
  SELECT_BLOG (state, response) {
    console.log(response);
    if (response) Object.assign(state.blog, response.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
