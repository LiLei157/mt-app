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
                    <el-col :span="16">
                        <el-input v-model="ruleForm.user"></el-input>
                    </el-col>    
                </el-form-item>
                <el-form-item label="邮箱:">
                    <el-col :span="16">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-col>
                    
                </el-form-item>
                <el-form-item label="验证码:">
                    <el-col :span="16">
                        <el-input v-model="ruleForm.code"></el-input>
                        <el-button size="mini" round>发送验证码</el-button>
                    </el-col>    
                </el-form-item>
                <el-form-item label="密码:">
                    <el-col :span="16">
                        <el-input v-model="ruleForm.pwd"></el-input>
                    </el-col>   
                </el-form-item>
                <el-form-item label="确认密码:">
                    <el-col :span="16">
                        <el-input v-model="ruleForm.cpwd"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" style="background-color:#00c58e">同意以下协议并注册</el-button>
                </el-form-item>
                <a href=""><span>《美团网用户协议》</span></a>
            </el-form>
        </section>
    </div>
</template>

<script>
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
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/register/index.scss'
</style>