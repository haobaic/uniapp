<template>
	<view class="my-add-path">
		<view class="path-item">
			<view class="">
				收件人
			</view>
			<input type="text" v-model="pathObj.name" value="" placeholder="收件人姓名" />
		</view>
		<view class="path-item">
			<view class="">
				手机号
			</view>
			<input type="text" v-model="pathObj.tel" value="" placeholder="11位手机号" />
		</view>
		<view class="path-item">
			<view class="">
				所在地区
			</view>
			<view class="path-item-select" @tap="showCityPicker">{{pathObj.cityName}}</view>
			<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel"
			 @onConfirm="onConfirm"></mpvue-city-picker>
		
		</view>
		<view class="path-item">
			<view class="">详细地址</view>
			<input type="text" v-model="pathObj.desc" value="" placeholder="5到60个字符" />
		</view>
		<view class="path-item">
			<view class="">
				设为默认地址
			</view>
			<radio-group name="" @change="radioChange">
				<label class="radio">
					<radio value="" :checked="pathObj.isDefault" color="#FF3333" /><text></text>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni/mpvue-citypicker/mpvueCityPicker.vue';
    import {mapActions} from 'vuex'
	export default {
		data() {
			return {
				pickerValueDefault: [0, 0, 1],
				pathObj:{
					"name":"",
					"tel":"",
					 "cityName":"请选择",
					"desc":"",
					"isDefault":false
				},
			    i:-1,
				//是否修改
				isStatus:false
			}
		},
		onLoad(e) {
			if(e.data){
				uni.setNavigationBarTitle({
					title:"修改地址"
				})
				let res=JSON.parse(e.data);
				this.pathObj=res.item;
				this.i=res.index
				this.isStatus=true
			}
		},
		components: {
			mpvueCityPicker
		},
		//点击保存
		onNavigationBarButtonTap() {
			//isStatus 为true时候修改
			if(this.isStatus){
				//新增
				this.undatePathFn({
					index:this.i,
					item:this.pathObj
				})
			}else{
				//新增
				this.createPathFn(this.pathObj)
			}
			uni.navigateBack({
				delta:1
			})
		},
		methods: {
			...mapActions(["createPathFn","undatePathFn"]),
			showCityPicker() {
				this.$refs.mpvueCityPicker.show();
			},
			onChange(e) {
				console.log(e);
			},
			onCancel(e) {
				console.log(e);
			},
			onConfirm(e) {
				this.pathObj.cityName=e.label
				console.log(e);
			},
			radioChange(){
				this.pathObj.isDefault=!this.pathObj.isDefault
			}
		}
	}
</script>
<style scoped>
	.my-add-path {
		padding-left: 20rpx;
	}

	.path-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 0;
		width: 100%;
		border-bottom: 2rpx solid #ccc;
	}

	.path-item input {
		flex: 1;
		text-align: left;
		padding-left: 10rpx;
	}

	.path-item-select {
		font-size: 28rpx;
		color: #2C405A;
		margin-right: 10rpx;
	}
</style>
