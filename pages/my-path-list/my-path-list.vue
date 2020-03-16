<template>
	<view class="my-path-list">
		<view class="path-list">
			<view class="path-item" v-for="(item,index) in list" :key="index" @tap="toAddPath(index)">
				<view class="item-main">
					<view class="item-name">{{item.name}}</view>
					<view class="">{{item.tel}}</view>
				</view>
				<view class="item-main">
					<view :class="item.isDefault?'active':''">默认</view>
					<view class="">{{item.cityName}}-{{item.desc}}</view>
				</view>
			</view>
		</view>
		<view class="add-path">
			<view class="add-path-btn" @tap="goAddPath()">新增地址</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState({
				list:state=>state.Path.list
			})
		},
		methods: {
			//修改地址
			toAddPath(index){
				let pathObj=JSON.stringify({
					index,
					item:this.list[index]
				})
				uni.navigateTo({
					url:"../my-add-path/my-add-path?data="+pathObj
				})
			},
			//新增地址
			goAddPath(){
				uni.navigateTo({
					url:"../my-add-path/my-add-path"
				})
			}
		}
	}
</script>

<style scoped>
.add-path{
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 20rpx 0;
}
.add-path-btn{
	border: 2rpx solid #49BDFB;
	color:#49BDFB;
	border-radius: 30rpx;
	padding: 6rpx 60rpx;
}
.path-list{
	padding-left: 20rpx;
}
.path-item{
	padding: 10rpx;
	border-bottom: 2rpx solid #ccc;
}
.item-main{
	display: flex;
	align-items: center;
}
.item-name{
	padding-right:10rpx ;
}
.active{
	padding:0 6rpx;
	background-color: #49BDFB;
	color: #fff;
	border-radius: 20rpx;
	font-size: 24rpx;
	padding-right: 10rpx;
	text-align: center;
}
</style>
