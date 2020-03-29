<template>
	<view class="my-config">
		<view class="config-item" @tap="goPathList()">
			<view class="">
				地址管理
			</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="my-exit" @tap="Outlogin">退出登陆</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		methods: {
			...mapMutations(['loginOut']),
			goPathList() {
				uni.navigateTo({
					url:"../my-path-list/my-path-list"
				})
			},
			Outlogin(){
				uni.showToast({
					title:"退出成功",
					icon:"none"
					
				})
				this.loginOut();
				uni.reLaunch({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style scoped>
	.config-item {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0 20rpx 20rpx;
		border-bottom: 2rpx solid #ccc;
	}

	.config-mark {
		padding-right: 20rpx;
	}

	.my-exit {
		background-color: #49BDFB;
		width: 100%;
		line-height: 80rpx;
		color: #fff;
		text-align: center;
	}
</style>
