<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchContent" placeholder="请输入商家或地点" @focus="handleFocus" @blur="handleBlur"></el-input>
          <button class="el-button el-button-primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="hotPlace">
            <dt>热门搜索</dt>
            <dd>火锅</dd>
            <dd>自助餐</dd>
            <dd>美食</dd>
            <dd>酒店</dd>
          </dl>
          <dl class="searchList" v-if="searchList">
            <dd>火锅</dd>
            <dd>故宫</dd>
            <dd>颐和园</dd>
          </dl>
        </div>

        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <!-- banner上方的几个连接导航 -->
        <ul class="nav">
          <li>
            <nuxt-link to="/6-1" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/6-2" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/6-3" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/6-4" class="apartment">民宿 / 公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/6-5" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchContent:'',   // 搜索框搜索内容
            isFocus:false,  //搜索框是否聚焦
        }
    },
    computed:{
        // 聚焦且输入为空时显示热门
        hotPlace(){
            return this.isFocus && !this.searchContent
        },
        //聚焦且有输入内容时，控制显示搜索相关
        searchList(){
            return this.isFocus && this.searchContent
        }
    },
    methods:{
        handleFocus(){
            this.isFocus = true
        },
        handleBlur(){
            setTimeout(()=>{
                this.isFocus = false
            },200)    
        }
    }
}
</script>

<style lang="scss">
</style>