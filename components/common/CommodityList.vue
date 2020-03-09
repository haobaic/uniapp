<!-- 商品列表 -->
<template>
	<view class="commodity-list">
		<Commodity :dataList='dataList'></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default {
		props:{
			dataList:Array
		},
		// data() {
		// 	return {
		// 		CommodityList:[{
		// 			id:1,
		// 			imgUrl:"../../static/img/commodity1.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:2,
		// 			imgUrl:"../../static/img/commodity2.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:3,
		// 			imgUrl:"../../static/img/commodity3.jpg",
		// 			name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 			pprice:"299",
		// 			oprice:"566",
		// 			discount:"5.5"
		// 		},{
		// 			id:4,
		// 			imgUrl:"../../static/img/commodity4.jpg",
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

<style>

</style>
