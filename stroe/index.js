import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		nickname : "未登录"
	},
	mutations : {
	   change : function(state, nickname){
		   state.nickname = nickname;
	   }
	}
});
export default store