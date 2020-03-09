import Vue from 'vue';
import Vuex from 'vuex';
//购物车
import cart from './modules/cart.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		cart
	}
})