<!-- header部门右侧nav导航栏 -->
<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list">
                <nuxt-link to="/1">我的美团</nuxt-link>
                <dl>
                    <dd>
                        <nuxt-link to="/1-1">我的订单</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/1-2">我的收藏</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/1-3">抵用券</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/1-4">账户设置</nuxt-link>
                    </dd>
                </dl>
            </li>
            <li>
                <nuxt-link to="/2">手机APP</nuxt-link>
            </li>
            <li class="list bd">
                <nuxt-link to="/3">商家中心</nuxt-link>
                <dl>
                    <dd>
                        <nuxt-link to="/3-1">登录商家中心</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/3-2">我想合作</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/3-3">免费手机开店</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/3-4">商家申请发票</nuxt-link>
                    </dd>
                </dl>
            </li>
            <li class="list site">
                <nuxt-link to="/4">网站导航</nuxt-link>
                <div class="subContainer">                                         
                        <dl class="hotel">
                            <dt>酒店旅游</dt>
                            <dd>
                                <nuxt-link to="/4-1">国际酒店</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">经济性酒店</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">公寓</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">青年旅社</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">农家院</nuxt-link>
                            </dd>
                        </dl>                   
                        <dl class="food">
                            <dt>吃美食</dt>
                            <dd>
                                <nuxt-link to="/4-2">烤鱼</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">烧烤</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">火锅</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">特色小吃</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/4-2">自助餐</nuxt-link>
                            </dd>
                        </dl>
                        <dl class="movie">
                            <dt>看电影</dt>
                            <dd>
                                <nuxt-link to="/5-1">热映电影</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/5-1">热门影院</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/5-1">热映电影口碑榜</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/5-1">最受期待电影</nuxt-link>
                            </dd>
                            <dd>
                                <nuxt-link to="/5-1">国内票房榜</nuxt-link>
                            </dd>
                        </dl>
                        <dl class="app">
                            <dt>手机应用</dt>
                            <dd>4</dd>
                        </dl>
                </div>
            </li>
        </ul>
    </div>
</template>