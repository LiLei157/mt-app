<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="mouseLeave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" :key="index" @mouseenter="mouseEnter(item)">
                <i :class="item.type"/><span>{{item.name}}</span><i class="arrow"></i>
            </dd>
        </dl>

        <div class="detail" v-if="kind" @mouseenter="rightMouseEnter" @mouseleave="rightMouseLeave">
            <template v-for="(item,idx) in curChildList.child">
                {{item}}
                <h4 :key="idx">{{item.title}}</h4>
                <span v-for="v in item.child" :key="v">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            kind:'',
            menuList:[
                {
                    type:'food',
                    name:'美食',
                    child:[
                        {
                            title:'美食',
                            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐','日韩料理']
                        }
                    ]
                },
                {
                    type:'takeout',
                    name:'外卖',
                    child:[
                        {
                            title:'外卖',
                            child:['美团外卖']
                        }
                    ]
                },
                {
                    type:'hotel',
                    name:'酒店',
                    child:[
                       {
                           title:'酒店星级',
                           child:['经济型','舒适/三星','高档/四星','豪华/五星']
                       } 
                    ]
                },
                {
                    type:'homestay',
                    name:'民宿',
                    child:[
                        {
                            title:'热门城市',
                            child:['上海','成都','北京','重庆','南京']
                        },
                        {
                            title:'热门房源',
                            child:['复式Loft','别墅']
                        }
                    ]
                },
                {
                    type:'movie',
                    name:'电影',
                    child:[
                        {title:'热映电影',child:['我和我的家乡','夺冠','一点就到家','姜子牙','急先锋']},
                        {title:'热门影院',child:['金逸影城','万达影城','大地影院','17.5影城','横店电影城']}
                    ]
                }

            ],
            leavetimer:null // 定时器，用于控制菜单的显示隐藏
        }
    },
    // watch:{
    //     kind(newVal){
    //         console.log(newVal);
    //     },
    //     curChildList(newVal){
    //         console.log(newVal);
    //     }
    // },
    computed:{
        curChildList(){
            return this.menuList.filter(item => item.type === this.kind)[0]
        }
    },
    methods:{
        mouseEnter(item){
            this.kind = item.type
        },
        mouseLeave(){
            this.leavetimer = setTimeout(()=>{
                this.kind = ''
            },150)    
        },
        /**
         * @description:当鼠标从左侧菜单项hover到右侧对应菜单项时，清除定时器，那么kind就不会被延时清空，那么右侧菜单项元素也不会被移除掉
         */
        rightMouseEnter(){
            clearTimeout(this.leavetimer)
        },
        rightMouseLeave(){
            this.kind = ''
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss"
</style>