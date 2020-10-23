<template>
    <div class="page-register">
        <article class="header">
            <header>
                <a href="/" class="site-logo"/>
                <span class="login">
                    <em class="blod">已有美团帐号?</em>
                    <a href="/login">
                        <el-button style="background-color:#00c58e;color:#fff" size="small">登录</el-button>
                    </a>
                </span>
            </header>
        </article>

        <section>
            <el-form :model="ruleForm" label-width="100px">
                <el-form-item label="昵称:">
                    <el-col :span="18">
                        <el-input v-model="ruleForm.user"></el-input>
                    </el-col>    
                </el-form-item>
                <el-form-item label="邮箱:">
                    <el-col :span="18">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-col>
                    
                </el-form-item>
                <el-form-item label="验证码:">
                    <el-col :span="18">
                        <el-input v-model="ruleForm.code"></el-input>
                        <el-button size="mini" round @click="sendCode">发送验证码</el-button>
                        <span class="status">{{statusMsg}}</span>
                    </el-col>    
                </el-form-item>
                <el-form-item label="密码:">
                    <el-col :span="18">
                        <el-input v-model="ruleForm.pwd"></el-input>
                    </el-col>   
                </el-form-item>
                <el-form-item label="确认密码:">
                    <el-col :span="18">
                        <el-input v-model="ruleForm.cpwd"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" style="background-color:#00c58e" @click="handleRegister">同意以下协议并注册</el-button>
                </el-form-item>
                <a href=""><span>《美团网用户协议》</span></a>
            </el-form>
        </section>
    </div>
</template>

<script>
import axios from '../server/interface/utils/axios'
import cryptoJS from 'crypto-js'    // 密码加密插件
export default {
    layout:'blank',
    data(){
        return {
            ruleForm:{
                user:'',
                email:'',
                code:'',
                pwd:'',
                cpwd:''
            },
            timerid:null,
            statusMsg:''
        }
    },
    methods:{
        sendCode(){
            console.log('send...')
            this.statusMsg = ''
            axios.post('/api/users/verify',{
                username: encodeURIComponent(this.ruleForm.user),
                email:this.ruleForm.email
            }).then(({status,data}) =>{
                console.log(status,data)
                if(status === 200 && data && data.code === 0){
                    let count = 60
                    // this.statusMsg = `验证码已发送，剩余${count--}`
                    console.error(this.statusMsg);
                    this.statusMsg = `验证码已发送,剩余${count--}秒`
                    this.timerid = setInterval(()=>{
                        this.statusMsg = `验证码已发送,剩余${count--}秒`
                        console.error('statusMsg',this.statusMsg)
                        if(count === 0){
                            clearInterval(this.timerid)
                        }
                    },1000)
                }else{
                    this.statusMsg = data.msg
                }
            })
        },
        handleRegister(){
            axios.post('/api/users/signup',{
                username:this.ruleForm.user,
                email:this.ruleForm.email,
                code:this.ruleForm.code,
                password:cryptoJS.MD5(this.ruleForm.pwd).toString() 
            }).then(({status,data}) =>{
                if(status === 200){
                    if(data.code === 0){
                        location.href = '/login'
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/register/index.scss'
</style>