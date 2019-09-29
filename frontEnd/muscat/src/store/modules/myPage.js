import mypageApi from './mypage/mypageApi'


const state = {
    user : {},
    isLogined : false,
    settings : {}
  };
  
const getters = {
    user: state => state.user ,
    isLogined: state => state.isLogined,
    settings: state => state.settings
};
  
const actions = {
    getUserSettings({commit, getters}) {
      //설정
    },
    logout({commit}) {
      // 로그아웃
      mypageApi.logout()
      .then(()=>{
        commit('logout');
      }).catch(api.globalError);
    },
    withdrawMember({commit}) {
        //회원 탈퇴
    }
};
  
const mutations = {
    setUser (state, flg) {
      state.isLogined = flg
      state.loginShow = false
    },
    logout(state) {
      state.isLogined = false
    },
    setSettings(state) {
        state.settings = state
    }
};
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}