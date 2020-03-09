<!-- 单个商品 -->
<template>
	<view class="commodity" :style="'flex-wrap:'+wrap+';'"> 
		<view class="commodity-item" :style="'width:'+itemW+';'" v-for="(item,index) in dataList" :key="index" @tap='goDetails(item.id)'>
			<image class="commodity-img" :style="'height:'+bigH+';'" :src="item.imgUrl" mode=""></image>
		    <view class="commodity-content">
				<text class="commodity-name" :style="'flex-wrap:'+nameSize+';'">{{item.name}}</text>
			    <view>
					<text class="pprice">¥{{item.pprice}}</text>
					<text class="oprice">¥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			dataList:Array,
			itemW:{
				type:String,
				default:"375rpx"
			},
			bigH:{
				type:String,
				default:"375rpx"
			},
			wrap:{
				type:String,
				default:"wrap"
			},
			nameSize:{
				type:String,
				default:"26rpx"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			goDetails(id){
				uni.navigateTo({
					url:'../../pages/details/details?id='+id
				})
			}
		}
	}
</script>

<style scoped> 
.commodity{
	display: flex;
}
.commodity-item{
	padding-bottom: 20rpx;
}
.commodity-img{
	width: 100%;
	
}
.commodity-content{
	text-align: center;
}
.commodity-name{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical;
	color: #333333;
	word-break: break-all;
	padding:6rpx 20rpx;
}
.pprice{
	margin-right:2rpx;
}
.oprice{
	text-decoration: line-through;
	font-size:24rpx ;
	color: #999999;
}
.discount{
	border-radius: 4rpx;
	border: 1px solid red;
	padding: 2rpx 10rpx;
	font-size: 20rpx;
	color: red;
}
</style>
