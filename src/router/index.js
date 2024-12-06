import Vue from 'vue'
import VueRouter from 'vue-router'
//引入Login组件
import Login from '../components/Login.vue'
//引入Home组件
import Home from '../components/Home.vue'
//引入Welcome组件
import Welcome from '../components/Welcome.vue'

import UserList from '../components/admin/UserList.vue'

import RightsList from '@/components/admin/RightsList.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    // 重定向到Welcome.vue
    redirect: "/welcome",
    //子组件welcome
    children: [
      { path: "/welcome", component: Welcome, },
      { path: "/user", component: UserList, },
      { path: '/rights', component: RightsList },
    ]
  },

]

const router = new VueRouter({
  routes
})

// 出现问题时候使用
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location,onResolve,onReject) {
//   if(onResolve || onReject) return originalPush.call(this,location,onResolve,onReject)
//   return originalPush.call(this,location).catch(err => err)
// }

// //挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//   //to 将要访问
//   //from 从哪访问
//   //next 接着干的是 next(url) 重定向到url上 next() 继续访问 to路径
//   if(to.path=='/login') return next();
//   //获取user
//   const userFlag = window.sessionStorage.getItem("user"); //取出当前用户
//   if(!userFlag) return next('/login'); //无值,返回登录页
//   next(); //符合要求 放行

// })


export default router
