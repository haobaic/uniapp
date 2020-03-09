<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key='index'>
			<image :src="item.bigUrl"class="item-big"  mode="" ></image>
			<view class="item-small">
				<block v-for="(k,i) in item.data" :key='i'>
					<image class="item-img" mode=""  :src="k.imgUrl"></image>
				</block>
			</view>
		</view>
		<!-- <view class="recommend-item">
			<image src="../../static/img/Furnishing.jpg" mode="" class="item-big"></image>
			<view class="item-small">
				<image class="item-img" mode=""  src="../../static/img/Furnishing1.jpg"></image>
				<image class="item-img" mode=""  src="../../static/img/Furnishing2.jpg"></image>
				<image class="item-img" mode=""  src="../../static/img/Furnishing3.jpg"></image>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		props:{
			dataList:Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.recommend{
	padding: 20rpx;
}
.recommend-item{
	display: flex;
    flex-direction: column;
	/* flex上下布局 */
	border-radius: 20rpx;
	border: 2rpx solid #CCCCCC;
	overflow: hidden;
	margin: 20rpx 0;
}
.item-big{
	width: 100%;
	height: 300rpx;
}
.item-small{
	width: 100%;
	height: 240rpx;
}
.item-img{
	width: 33.3333%;
	height: 240rpx;
}
</style>
