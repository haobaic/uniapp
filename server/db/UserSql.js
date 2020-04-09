var User = {
    //查询用户名
    queryUserName( param ){
        if( param.userName ){
            //phone = 应该是手机号这个变量[属性],为了后面好操作所有名称改为:userName
            return "select * from user where userName = '"+param.userName+"' or phone = '"+param.userName+"' ";
        }else{
            //第三方登录
            return "select * from user where provider = '"+param.provider+"' or openid = '"+param.openid+"' ";
        }
         
    },
    //验证用户名和密码
    queryUserPwd( param ){
        return "select * from user where userName = '"+param.userName+"' or phone = '"+param.userName+"' and userPwd = '"+param.userPwd+"' ";
    },
    //增加一条用户数据
    insertData( param ){
        let userName = param.userName || param.openid;
        const jwt = require('jsonwebtoken');
        let payload = {name:userName}; //用户名
        let secret = 'xiaoluxian';//口令
        let token = jwt.sign(payload,secret);
        let nickName = param.nickName || "默认昵称";
        let avatarUrl = param.avatarUrl || "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1736629101,3186546008&fm=15&gp=0.jpg";
        return 'insert into user (userName,userPwd,phone,imgUrl,nickName,token,provider,openid) values ("admin","1234567","'+param.userName+'","'+avatarUrl+'","'+nickName+'","'+token+'","'+param.provider+'","'+param.openid+'")';
    }
}
 
exports = module.exports = User;