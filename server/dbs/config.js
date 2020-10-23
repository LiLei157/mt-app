/**
 * @description: mongodb,redis,smtp相关配置
 */
export default{
    dbs:'mongodb://127.0.0.1:27017/student',   //mongodb
    redis:{ //redis
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp:{  // smtp邮件服务
        get host(){
            return 'smtp.qq.com'
        },
        get user(){
            return '1213564228@qq.com'
        },
        get pass(){
            return 'nmeoakboykzziebf'
        },
        get code(){ // 邮箱生成随机验证码
            return ()=>{
                return Math.random().toString(16).slice(2,6).toUpperCase()
            }
        },
        get expire(){   // 生成邮箱验证码失效时间
            return ()=>{
                return new Date().getTime()+60*60*1000
            }
        }
    }
}