<template>
    <div class="m-life">
        <el-row>
            <el-col :span="14">
                <!-- slider轮播图组件 -->
                <my-slider/>
            </el-col>
            <el-col :span="4">
                <div class="m-life-pic"/>
            </el-col>
            <el-col :span="6">
                <div class="m-life-login">
                    <h4>
                        <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
                        Hi!你好
                    </h4>
                    <p><button class="button">注册</button></p>
                    <p><button class="button">立即登录</button></p>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="m-life-hotel"></div>
            </el-col>
            <el-col :span="7">
                <div class="m-life-music"></div>
            </el-col>
            <el-col :span="4">
                <div class="m-life-coop"></div>
            </el-col>
            <el-col :span="6">
                <div class="m-life-downapp">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                    <p>美团APP手机版</p>
                    <h4><span>1元起</span> 吃喝玩乐</h4>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MySlider from '@/components/index/slider'
export default {
    components:{
        MySlider
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss"
</style>