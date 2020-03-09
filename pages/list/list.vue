<template>
	<view>
		<Lines />
		<view class="list">
			<scroll-view scroll-y="true" class="list-left" :style="'height:'+clentHeight+'px;'">
				<!-- 左侧 -->
				<view v-for="(item,index) in leftData" :key='index' class="left-item" @tap="changeLeftTab(index,item.id)">
					<view class="left-name" :class="activeIndex===index?'left-name-active':''">{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-y="true" class="list-right" :style="'height:'+clentHeight+'px;'">
				<view class="right-list" v-for="(item,index) in rightData" :key='index'>
					<block v-for="(k,i) in item" :key='i'>
						<view class="list-title">{{k.name}}</view>
						<view class="right-content">
							<view class="right-item" v-for="(it,idx) in k.list" :key='idx'>
								<image class="right-img" :src="it.imgUrl" mode=""></image>
							    <view class="right-name">{{it.name}}</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Lines from '../../components/common/Lines.vue';
	import $http from '@/common/api/request.js';
	export default {
		data() {
			return {
				//内容块的高度值
				clentHeight:0,
				activeIndex:0,
				leftData:[],
				rightData:[]
			}
		},
		components:{
			Lines
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight + uni.upx2px(96)-this.getClientHeight();
				}
			})
		},
		onLoad() {
			this.getData()
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"../search/search"
			})
		},
		methods: {
			//获取可视区域高度【兼容】
			getClientHeight(){
				const res = uni.getSystemInfoSync();
				const system = res.platform;
				if( system ==='ios' ){
					return 44+res.statusBarHeight;
				}else if( system==='android' ){
					return 48+res.statusBarHeight;
				}else{
					return 0;
				}
			},
			//左侧点击事件
			changeLeftTab(index,id){
				this.getData(id);
				this.activeIndex=index;
			},
			//获取数据
			getData(id){
				if(id===(this.activeIndex+1)){
					return;
				}
				$http.request({
					url:"/goods/list"
				}).then((res)=>{
					let leftData=[];
					let rightData=[];
					res.forEach(v=>{
						leftData.push({
							name:v.name,
							id:v.id
						})
						//如果点击id相同  就像右侧加数据
						if(v.id===(this.activeIndex+1)){
							rightData.push(v.data)
						}
					})
					this.leftData=leftData;
					this.rightData=rightData;
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style scoped>
.list{
	display: flex;
}
.list-left{
	width: 200rpx;
}
.left-item{
	border-bottom: 2rpx solid #fff;
	font-size: 28rpx;
	background-color: #F7F7F7;
}
.left-name{
	padding: 30rpx 0;
	text-align: center;
	font-weight: bold;
}
.left-name-active{
	border-left:8rpx solid #00B7FF;
	background-color: #FFFFFF;
}
.list-right{
	flex: 1;
	padding-left: 30rpx;
}
.list-title{
	font-weight: bold;
	padding: 30rpx 0;
}
.right-content{
	display: flex;
	flex-wrap: wrap;
}
.right-item{
	width: 150rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10rpx;
}
.right-img{
	width: 150rpx;
	height: 150rpx;
}
.right-name{
	padding:16rpx 0;
}
</style>
