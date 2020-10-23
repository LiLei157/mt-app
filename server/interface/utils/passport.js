/**
 * @description:passport插件：身份验证策略插件  koa-passport插件是对passport在koa中使用的进一步封装
 * 
 */
import passport from 'koa-passport'
import LocalStreategy from 'passport-local'
import UserModel from '../../dbs/models/user'

passport.use(new LocalStreategy(
    async (username,password,done)=>{
        let where = {
            username
        }
        let result = await UserModel.findOne(where)
        if(result != null){
            if(result.password === password){
                return done(null,result)
            }else{
                return done(null,false,'密码错误')
            }
        }else{
            return done(null,false,'用户不存在')
        }
    }
))
// 序列化
passport.serializeUser(function (user,done){
    done(null,user)
})
// 反序列化
passport.deserializeUser(function (user,done){
   return done(null,user)
})

export default passport