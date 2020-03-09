export default{
    state:{
        list:[
            // {
            //     checked:false,
            //     id:1,
            //     name:"11的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
            //     color:"颜色：返回对方的过分的",
            //     imgUrl:"../../static/img/Children2.jpg",
            //     pprice:"27",
            //     num:1
            // },
            // {
            //     checked:false,
            //     id:2,
            //     name:"22打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
            //     color:"颜色：返回对方的过分的",
            //     imgUrl:"../../static/img/Children2.jpg",
            //     pprice:"27",
            //     num:1
            // }
        ],
        selectedList:[]
    },
    getters:{
        //判断是否  全选
        checkedAll(state){
            return state.list.length  ===  state.selectedList.length;
        },
		//合计和结算数量 
		totalCount(state){
			let total={
				pprice:0,
				num:0
			}
			state.list.forEach(v=>{
				if(state.selectedList.indexOf(v.id)>-1){
					total.pprice+=v.pprice*v.num;
					total.num=state.selectedList.length
				}
			})
			return total;
		},
		
    },
    mutations:{
        //全选
        checkAll(state){
            state.selectedList = state.list.map(v=>{
                v.checked = true;
                return v.id;
            })
        },
        //全不选
        unCheckAll(state){
             
            state.list.forEach(v=>{
                v.checked = false;
            })
            state.selectedList = [];
        },
		//单选
		selectItem(state,index){
			let id=state.list[index].id;
			let i=state.selectedList.indexOf(id);
				//存在代表选中  否则移除
			if(i>-1){
				state.list[index].checked = false;
				return state.selectedList.splice(i,1)
			}else{
				state.list[index].checked = true;
				state.selectedList.push(id)
			}
		},
		delFGoods(state){
			state.list=state.list.filter(v=>{
				return state.selectedList.indexOf(v.id)===-1;
			})
		},
		//点击加入购物车
		addShopCart(state,goods){
			state.list.push(goods)
		}
    },
    actions:{
        checkedAllFn({commit,getters}){
             
            getters.checkedAll  ?  commit("unCheckAll")  :  commit("checkAll");
         
        },
		delFGoodsFn({commit}){
			commit('delFGoods');
			commit('unCheckAll');
			uni.showToast({
				title:'删除成功',
				icon:'none'
			})
		}
    }
}
