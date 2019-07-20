// 权限控制相关
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken, getMenus} from '@/utils/authUtil'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
// 页面跳转权限控制
// router.beforeEach((to, from, next) => {
//   debugger
//   // 显示进度条
//   NProgress.start();
//   // 获取登陆token信息
//   let token = getToken();

//   if (token) {
//     if (to.path === '/login') {
//       next({path: '/'})
//       NProgress.done();
//     }
//   }
  
// })

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('login_username');
  const menus = getMenus();
  debugger
    // 显示进度条
  NProgress.start();
  // 获取登陆token信息
  let token = getToken();
  if (!token && (to.path !== '/login') ) {
    // 未登录跳转到登陆页面
    next('/login');
  }else if (!menus || menus.length <= 0) {
    next('/login');
  } else {
    // 加载动态菜单和路由
    //addDynamicMenuAndRoutes()
    next();
    
  }
  NProgress.done();
    
})