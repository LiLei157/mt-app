<template>
    <div class="m-header">
        <el-row>
            <top-bar></top-bar>
        </el-row>
        <el-row>
            <search-bar></search-bar>
        </el-row>
    </div>
</template>
<script>
import TopBar from './topbar'
import searchBar from './searchbar'
export default {
    components:{
        TopBar,
        searchBar
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
</style>