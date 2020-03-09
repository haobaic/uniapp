<template>
	<view class='banner'>
		<image class='banner-img' :src="dataImg" mode=""></image>
	</view>
</template>

<script>
	export default{
		props:{
			dataImg:String
		}
	}
</script>

<style scoped>
.banner{
	width:100%;
	height: 300rpx;
}
.banner-img{
	width:100%;
	height: 300rpx;
}
</style>
