// const Koa = require('koa')
import Koa from 'koa'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'
import mongoose from 'mongoose'
import bodyParser from 'koa-parser'   // 该插件用于处理post请求的data参数
import session from 'koa-generic-session' // 用户session的相关处理
import Redis from 'koa-redis' // koa-redis redis服务插件
import json from 'koa-json' // 美化json数据插件

import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/user'

// session及redis配置
app.keys = ['mt','keyskeys']
app.proxy = true
app.use(session({key:'mt',prefix:'mt:uid',store:new Redis()}))

// post参数处理配置
app.use(bodyParser({
  extendTypes:['json','form','text']
}))
app.use(json())
// mongoose连接mongodb数据库
mongoose.set('useCreateIndex',true)
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
// passport 配置
app.use(passport.initialize()) 
app.use(passport.session())

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // 引入路由
  app.use(users.routes(),users.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
