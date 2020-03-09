<template>
	<view class="shop">
		<view class="shop-item" v-for="(item,index) in dataList" :key='index'>
			<view class="shop-big">
				<image class="shop-big" :src="item.bigUrl"></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList='item.data'  wrap='no-wrap' itemW='200rpx' bigH='200rpx' nameSize='20rpx'></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		props:{
			dataList:Array
		},
		// data(){
		// 	return{
		// 		ShopList:[{
		// 			id:1,
		// 			imgUrl:"../../static/img/shop1.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:2,
		// 			imgUrl:"../../static/img/shop2.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:3,
		// 			imgUrl:"../../static/img/shop3.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:1,
		// 			imgUrl:"../../static/img/shop1.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:2,
		// 			imgUrl:"../../static/img/shop2.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:3,
		// 			imgUrl:"../../static/img/shop3.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		}]
		// 	}
		// },
		components:{
			Commodity
		}
	}
</script>

<style scoped>
	.shop-big{
		width: 100%;
		height: 350rpx;
		display: block;
	}
	.scroll-content{
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item{
		display: inline-block;
	}
</style>
