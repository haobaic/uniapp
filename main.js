import Vue from 'vue'
import App from './App'
import store from './store';
Vue.config.productionTip = false
Vue.prototype.$store=store;
App.mpType = 'app'
//权限跳转判断
Vue.prototype.Tonavigator=(options)=>{
	if(!store.state.user.loginStatus){
		uni.showToast({
			title:"请先登陆",
			icon:"none"
		})
		return uni.navigateTo({
			url:"/pages/login/login"
		})
	}
	uni.navigateTo(options)
}
const app = new Vue({
	store,
    ...App
})
app.$mount()
