<template>
    <div class="m-istyle">
        <template v-for="(item,index) in list">
            <dl :key="index">
            <dt>{{item.title}}</dt>
            <dd v-for="(item1,index1) in item.child" :key="index1">
                {{item1.title}}
            </dd>  
            </dl>
            <ul class="ibody">
                1
            </ul>
        </template>
        
    </div>
</template>

<script>
export default {
   data(){
       return {
           list:{
               
            //    movie:[
            //        {
            //            title:'猫眼电影',
            //            child:[
            //                {
            //                title:'正在热映',
            //                child:[
            //                    {
            //                         name:'我和我的家乡',imgUrl:'//p0.meituan.net/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg@214w_297h_1e_1c',filmMark:'//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            //                    },
            //                    {
            //                        name:'喜宝',imgUrl:'//p0.meituan.net/movie/35a2550fdf6ca5088087a685e9ec8c791613927.jpg@214w_297h_1e_1c',filmMark:'//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            //                    },
            //                    {
            //                        name:'金刚川',imgUrl:'//p0.meituan.net/moviemachine/4264322771f13bb3d75c5d2df39bb0dd4117547.jpg@214w_297h_1e_1c',filmMark:'//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            //                    },
            //                    {
            //                        name:'夺冠',imgUrl:'//p1.meituan.net/movie/e7185e149d79e72c4ef0d70f27fc76da1642784.jpg@214w_297h_1e_1c',filmMark:'//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            //                    },
            //                    {
            //                        name:'一点就到家',imgUrl:'//p0.meituan.net/movie/c16b0a68f95d884d428f339f8eacce834410200.jpg@214w_297h_1e_1c',filmMark:'//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            //                    }
            //                ]
            //            },
            //            {
            //                title:'即将上映',
            //                child:[
            //                    {
            //                        name:'东极日出',imgUrl:'//p0.meituan.net/movie/04d8eaa69f12267e469b657d96137a993638192.jpg@214w_297h_1e_1c'
            //                    },
            //                    {
            //                        name:'山花绽放',imgUrl:'//p0.meituan.net/moviemachine/259bdaee4b96f42cec33e16d90c5c0681152570.jpg@214w_297h_1e_1c'
            //                    },
            //                    {
            //                        name:'红色警戒',imgUrl:'//p1.meituan.net/movie/0d0f2e1e0409dd94831abba306b74ba81672556.jpg@214w_297h_1e_1c'
            //                    },
            //                ]
            //            }
            //            ]
            //        }
                   
            //        child:[
                       
            //        ]
            //    ],
               apart:[
                   {

                   }
                   title:'推荐民宿',
                   child:[
                       {
                           title:'南京',
                           child:[
                               {
                                   name:'泰富世界城.月星家居.龙鼎万达公寓',
                                   imgUrl:'https://img.meituan.net/phoenix/405aa95b26ad9e515eb31403ddf231221923540.jpg@740w_416h_1e_1c',
                                   des:'整套1居室·可住2人',
                                   place:'无锡高新开发区'
                               },
                               {
                                   name:'碧桂园 温馨独立单间',
                                   imgUrl:'https://img.meituan.net/phoenix/56042436b56b9614ea5eef6a12e77146288879.jpg@740w_416h_1e_1c',
                                   des:'整套3居室·可住1人',
                                   place:'火车东站区'
                               },
                               {
                                   name:'泰富世界城.月星家居.龙鼎万达公寓',
                                   imgUrl:'https://img.meituan.net/phoenix/405aa95b26ad9e515eb31403ddf231221923540.jpg@740w_416h_1e_1c',
                                   des:'整套1居室·可住2人',
                                   place:'无锡高新开发区'
                               }
                           ]
                       },
                       {
                           title:'北京',
                           child:[
                               {
                                   name:'泰富世界城.月星家居.龙鼎万达公寓',
                                   imgUrl:'https://img.meituan.net/phoenix/405aa95b26ad9e515eb31403ddf231221923540.jpg@740w_416h_1e_1c',
                                   des:'整套1居室·可住2人',
                                   place:'无锡高新开发区'
                               },
                               {
                                   name:'碧桂园 温馨独立单间',
                                   imgUrl:'https://img.meituan.net/phoenix/56042436b56b9614ea5eef6a12e77146288879.jpg@740w_416h_1e_1c',
                                   des:'整套3居室·可住1人',
                                   place:'火车东站区'
                               },
                               {
                                   name:'泰富世界城.月星家居.龙鼎万达公寓',
                                   imgUrl:'https://img.meituan.net/phoenix/405aa95b26ad9e515eb31403ddf231221923540.jpg@740w_416h_1e_1c',
                                   des:'整套1居室·可住2人',
                                   place:'无锡高新开发区'
                               }
                           ]
                       }
                   ]
               ]
           }
       }
   } 
}
</script>

<style lang="scss">
    @import '@/assets/css/index/artistic.scss'
</style>