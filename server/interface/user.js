/**
 * @description:用户相关接口
 * koa-router：路由插件
 * koa-redis：redis插件
 * nodemailer:用于邮箱向应用程序发送邮件
 */
import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/user'
import Passport from '../interface/utils/passport'
import Email from '../dbs/config'
import axios from '../interface/utils/axios'

const router = new Router()
router.prefix('/api/users')

const Store = new Redis().client
/**
 * 注册接口
 */
router.post('/signup',async (ctx)=>{
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body
    // console.log(username,password,email,code)
    if(code){
        // 如果有验证码
        const saveCode = await Store.hget(`nodeemail:${username}`,'code')   // 把前端输入的code验证码保存到session中
        const saveExpire = await Store.hget(`nodemail:${username}`,'expire')    // 获取验证码过期时间
        if(code === saveCode){  // 如果用户输入的验证码和存的验证码一样
            if(new Date().getTime() - saveExpire > 0){
                // 验证码过期
                ctx.body = {
                    code:-1,
                    msg:'验证码已过期，请重新尝试'
                }
                return false
            }else{
                ctx.body = {
                    code:-1,
                    msg:'请填写正确的验证码'
                }
            }
        }else{
            ctx.body = {
                code:-1,
                msg:'请填写验证码'
            }
        }
        let user = await User.findOne({     // 根据用户名到数据库中查找该用户信息
            username
        })
        console.log(user)
        if(user && user.length){    // 如果查到的数据部位空，则说明该用户名已被注册
            ctx.body = {
                code:-1,
                msg:'该用户名已被注册'
            }
            return
        }
        let nuser = await User.create({
            username,
            password,
            email
        })
        console.log(nuser)
        if(nuser){
            let res = await axios.post('/api/users/signin',{
                username,
                password
            })
            if(res.data && res.data.code ===0){
                ctx.body = {
                    code:0,
                    msg:'注册成功',
                    user:res.data.user
                }
            }else{
                ctx.body = {
                    code:-1,
                    msg:'Error'
                }
            }
        }else{
            ctx.body = {
                code:-1,
                msg:'注册失败'
            }
        }
    }
})

/**
 * 登录接口
 */
router.post('/signin',async (ctx,next)=>{
    return Passport.authenticate('local',function(err,user,info,status){
        if(err){
            ctx.body = {
                code:-1,
                msg:err
            }
        }else{
            if(user){
                ctx.body = {
                    code: 0,
                    msg:'登录成功',
                    user
                }
                return ctx.login(user)
            }else{
                ctx.body = {
                    code:1,
                    msg:info
                }
            }
        } 
    })(ctx,next)
})

router.post('/verify',async (ctx,next) =>{
    let username = ctx.request.body.username    // 获取用户名
    const saveExpire = await Store.hget(`nodeemail:${username}`,'expire')   // 获取过期时间
    if(saveExpire && new Date().getTime() - saveExpire < 0){    // 判断是否有过期时间设置并且还未过期
        ctx.body = {
            code:-1,
            msg:'验证码请求过于频繁'
        }
        return false
    }
    // 发邮件的功能
    let transporter = nodeMailer.createTransport({
        host:Email.smtp.host,
        post:587,
        secure:false,    // 如果为true，则监听465端口；如果是false，就返回其他端口
        auth:{
            // user和pass是在config.js中定义的qq邮箱smtp服务的配置里面
            user:Email.smtp.user,       
            pass:Email.smtp.pass
        }
    })
    let ko = {
        code:Email.smtp.code(),
        expire:Email.smtp.expire(),
        email:ctx.request.body.email,
        user:ctx.request.body.username
    }
    let mailOptions = {
        from:`"认证邮件" <${Email.smtp.user}>`,
        to:ko.email,
        subject:'《注册码》',      //标题描述
        html:`您的验证码是：${ko.code}`
    }
    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log('error');
        }else{
            Store.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
        }
    })
    ctx.body = {
        code:0,
        msg:'验证码已发送,有效期1分钟'
    }
})

export default router
