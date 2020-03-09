<template>
	<view class="search">
		<Lines />
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-iconset0213" v-if="searchData.length>0" @tap="clearHistory"></view>
			</view>
			<view v-if="searchData.length>0">
				<view>
					<view 
					class="search-name f-color"
					v-for="(item,index) in searchData"
					:key="index"
					@tap="toSearchList(item)"
					>{{item}}</view>
				</view>
			</view>
			<view v-else class="search-end">暂无搜索记录</view>
		</view>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>
			</view>
			<view>
				<view class="search-name f-color">热门搜索</view>
				<view class="search-name f-color">热门搜索</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default {
		data() {
			return {
				//输入关键词
				keyword:"",
				//搜索记录
				searchData:[]
			}
		},
		onLoad() {
		  uni.getStorage({
		  	key:"searchData",
			success:(res)=>{
				this.searchData=JSON.parse(res.data)
			}
		  })	
		},
		//点击搜索文字
		onNavigationBarButtonTap(e) {
			this.search();
			// if(e.float==='right'){
			// 	uni.navigateTo({
			// 		url:'../search-list/search-list'
			// 	})
			// }
		},
		//监听input变化
		onNavigationBarSearchInputChanged(e) {
			this.keyword=e.text;
		},
		//监听软键盘搜索按钮点击
		onNavigationBarSearchInputConfirmed() {
			this.search();
		},
		components: {
			Lines
		},
		methods: {
          search(){
			  if(this.keyword===""){
				  return uni.showToast({
				  	title:"关键词不能为空",
					icon:"none"
				  })
			  }else{
				  this.toSearchList(this.keyword)
			  }
			  //隐藏软键盘
			  uni.hideKeyboard();
			  this.addSearch();
		  },
		  //记录最近搜索
		  addSearch(){
			  let idxs=this.searchData.indexOf(this.keyword);
			  if(idxs<0){
				  this.searchData.unshift(this.keyword)
			  }else{
				  //重复内容放到最前面
				  this.searchData.unshift(this.searchData.splice(idxs,1)[0])
			  }
			  uni.setStorage({
			  	key:"searchData",
				data:JSON.stringify(this.searchData)
			  })
		  },
		  //清除搜索记录
		  clearHistory(){
			  uni.showModal({
			  	title:"重要提示",
				content:"是否清除搜索记录",
				cancelText:"取消",
				confirmText:"确定",
				success: (res) => {
					if(res.confirm){
						uni.removeStorage({
										  key:"searchData"
						})
						this.searchData=[]
					}
				}
			  })
		  },
		  //点击搜索记录进入搜索页面
		  toSearchList(item){
			  uni.navigateTo({
			  	url:'../search-list/search-list?keyword='+item
			  })
		  }
		}
	}
</script>

<style scoped>
.search-item{
	padding: 20rpx;
}
.search-title{
	display: flex;
	justify-content: space-between;
}
.search-name{
	padding: 4rpx 24rpx;
	background-color: #E1E1E1;
	display:inline-block;
	border-radius: 26rpx;
	margin: 10rpx;
}
.search-end{
	text-align: center;
}
</style>
