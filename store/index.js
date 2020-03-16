import Vue from 'vue';
import Vuex from 'vuex';
//购物车
import cart from './modules/cart.js';
//地址
import Path from './modules/path.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		cart,
		Path
	}
})