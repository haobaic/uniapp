<template>
	<view class="hot">
		<Commodity :dataList='dataList' itemW="250rpx" bigH="220rpx"></Commodity>
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
		// 		HotList:[
		// 			{
		// 				id:1,
		// 				imgUrl:"../../static/img/hot1.jpg",
		// 				name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 				pprice:"299",
		// 				oprice:"566",
		// 				discount:"5.5"
		// 			},{
		// 				id:2,
		// 				imgUrl:"../../static/img/hot2.jpg",
		// 				name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 				pprice:"299",
		// 				oprice:"566",
		// 				discount:"5.5"
		// 			},{
		// 				id:3,
		// 				imgUrl:"../../static/img/hot3.jpg",
		// 				name:"大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛大衣绒毛",
		// 				pprice:"299",
		// 				oprice:"566",
		// 				discount:"5.5"
		// 			}
		// 		]
		// 	}
		// },
		components:{
			Commodity
		}
	}
</script>

<style scoped>
	
</style>
