//用户信息
export default{
    state:{
       //登录状态
	   loginStatus:false,
	   //token:
	   token:null,
	   //用户信息 昵称 头像
	   userInfo:{}
    },
    getters:{
      
    },
    mutations:{
	  //一旦进入app 就需要执行这个方法 把用户信息读出来
	  isitUSer(state){
		  let userInfo=uni.getStorageSync("userInfo");
		  if(userInfo){
			  userInfo=JSON.parse(userInfo)
			  state.userInfo=userInfo
			  state.loginStatus=true;
			  state.token=userInfo.token;
		  }
	  },
      //登陆后保存用户信息
	  login(state,userInfo){
	   state.userInfo=userInfo
	   state.loginStatus=true;
	   state.token=userInfo.token;
	   //持久化存储  ==>对象转化字符串
	   uni.setStorageSync("userInfo",JSON.stringify(userInfo))
	  }
    },
    actions:{
		
    }
}
