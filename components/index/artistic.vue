<template>
    <div class="m-istyle">
        <dl @mouseover="over">
            <dd :class="{active:kind=== 'all'}" kind="all">全部</dd>
            <dd :class="{active:kind === 'part'}" kind="part">约会聚餐</dd>
            <dd :class="{active:kind === 'spa'}" kind="spa">丽人SPA</dd>
            <dd :class="{active:kind === 'movie'}" kind="movie">电影演出</dd>
            <dd :class="{active:kind === 'travel'}" kind="travel">品质出游</dd>
        </dl>

        <ul class="ibody">
            <li v-for="(item,idx) in list[kind]" :key="idx">
                <div class="el-card">
                    <img :src="item.imgUrl" alt="">
                    <p class="title">{{item.name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            kind:'all',
            list:{
                all:[
                    {name:'我和我的家乡',imgUrl:'//p0.meituan.net/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg@214w_297h_1e_1c',filmMark:'//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'},
                    {name:'东极日出',imgUrl:'//p0.meituan.net/movie/04d8eaa69f12267e469b657d96137a993638192.jpg@214w_297h_1e_1c'},
                ],
                part:[3,4],
                spa:[5,6],
                movie:[7,8],
                travel:[9,10]
            },
            timer:null
        }
    },
    methods:{
        over(e){
            if(e.target.getAttribute('kind')){
                this.timer = setTimeout(()=>{
                this.kind = e.target.getAttribute('kind')
            },200)
            }
            console.log(e.target.getAttribute('kind'))
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss'
</style>