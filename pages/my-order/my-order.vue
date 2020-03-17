<template>
	<view class="my-order bg-active-color">
		<Lines />
		<view class="my-header">
			<view class="header-item" v-for="(item,index) in tabList" :class="activeIndex==index?'active':''" @tap='changeTab(index)'
			 :key="index">
				{{item.name}}
			</view>
		</view>
		<block v-for="(tabItem,tabI) in tabList" :key="tabI">
			<view v-show="activeIndex==tabI" >
				
				<view class='order-main' v-if="tabItem.list.length>0" :style="'height:'+clentHeight+'px;'">
					<!--商品-->
					<view v-for="(item,index) in tabItem.list" :key="index">
					<view class='order-goods' >
						<view class='goods-status f-active-color'>{{item.status}}</view>
						<view class='goods-item' v-for="(Ltem,idx) in item.goods_item" :key="idx">
							<OrderList :item="Ltem" :index="idx" />
						</view>
					</view>
					<Lines></Lines>
					<!--总价-->
					<view class='total-price'>
						订单金额: <text class='f-active-color'>¥{{item.totalPrice}}</text> (包含运费¥0.00)
					</view>
					<Lines></Lines>
					<!--支付-->
					<view class='payment'>
						<view class='payment-text f-active-color'>支付</view>
					</view>
					</view>
				</view>

				<view class='no-order' v-else :style="'height:'+clentHeight+'px;'">
					<view>您还没有相关订单</view>
					<view class='no-order-home'>去首页逛逛</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue';
	import OrderList from '@/components/order/order-list.vue'
	export default {
		data() {
			return {
				tabList: [{
						name: "全部",
						list: [{
							status: "待付款",
							totalPrice: "39999.00",
							goods_item: [{
								imgUrl: "../../static/img/Children3.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了必须买",
								attrs: "黑色",
								pprice: "288.00",
								num: "2"
							},{
								imgUrl: "../../static/img/Children3.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了必须买",
								attrs: "黑色",
								pprice: "288.00",
								num: "2"
							}]
						}]
					},
					{
						name: "待付款",
						list: []
					},
					{
						name: "待发货",
						list: []
					},
					{
						name: "待收货",
						list: []
					},
					{
						name: "待评价",
						list: []
					}
				],
				activeIndex: 0,
				//高度
				clentHeight: 0,
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - this.getClientHeight();
				}
			})
		},
		components: {
			Lines,
			OrderList
		},
		methods: {
			//顶部切换
			changeTab(index) {
				this.activeIndex = index;
			},
			//获取可视区域高度【兼容】
			getClientHeight() {
				const res = uni.getSystemInfoSync();
				const system = res.platform;
				if (system === 'ios') {
					return 44 + res.statusBarHeight;
				} else if (system === 'android') {
					return 48 + res.statusBarHeight;
				} else {
					return 0;
				}
			}

		}
	}
</script>

<style scoped>
	.my-order {}

	.my-header {
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid #F7F7F7;
	}

	.header-item {
		line-height: 120rpx;
		text-align: center;
		flex: 1;
	}

	.active {
		border-bottom: 4rpx solid #49BDFB;
	}

	.no-order {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
	}

	.no-order-home {
		padding: 6rpx 60rpx;
		border: 2rpx solid #49BDFB;
		color: #49BDFB;
		border-radius: 40rpx;
	}

	.goods-status {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}
	.total-price {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}

	.payment {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}

	.payment-text {
		border: 2rpx solid #49BDFB;
		padding: 6rpx 40rpx;
		border-radius: 30rpx;
	}
</style>
