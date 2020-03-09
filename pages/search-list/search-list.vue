<template>
	<view>
		<ShopList :keyword="keyword"></ShopList>
	</view>
</template>

<script>
	import ShopList from '@/components/common/ShopList.vue'
	export default {
		data() {
			return {
				//接收关键词
				keyword:"",
			}
		},
		onLoad(options){
			this.keyword=options.keyword;
		// #ifdef APP-PLUS  
		var webView = this.$mp.page.$getAppWebview();  
		// 设置 searchInput的 text  
		webView.setTitleNViewSearchInputText(options.keyword);
		// #endif
		},
		components:{
			ShopList
		},
		//标题栏按钮点击
		onNavigationBarButtonTap(e){
			console.log(e.float)
			if(e.float==='left'){
				uni.navigateTo({
					url:'../search-list/search-list'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
