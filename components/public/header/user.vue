<!-- Header头中的user用户组件-->
<template>
    <div class="m-user">
        <!-- 已登录 -->
        <template v-if="user">
            欢迎您,<span class="username">{{span}}</span>
            [<nuxt-link to="/exit">退出</nuxt-link>]
        </template>
        <!-- 未登录 -->
        <template v-else>
            <nuxt-link class="login" to="/login">立即登录</nuxt-link>
            <nuxt-link class="register" to="/register">注册</nuxt-link>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:''
        }
    }
}
</script>