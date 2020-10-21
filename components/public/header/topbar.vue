<template>
    <el-row :gutter="0">
        <el-col :span="5">
            <geo/>
        </el-col>
        <el-col :span="6">
            <user/>
        </el-col>
        <el-col :span="13">
            <my-nav/>
        </el-col>
    </el-row>
</template>

<script>
import Geo from './geo'
import User from './user'
import MyNav from './nav'
export default {
    components:{
        Geo,
        User,
        MyNav
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/public/layout.scss";
    // @import "@/assets/css/public/header.scss";
    // .m-header{
    //     .el-col{
    //         line-height: 60px;
    //     }
    // }
</style>