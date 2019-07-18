// 权限控制相关
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/util/authUtils'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
// 页面跳转权限控制
router.beforeEach((to, from, next) => {

  // 显示进度条
  NProgress.start();
  // 获取登陆token信息
  let token = getToken();

  if (token) {
    if (to.path === '/login') {
      next({path: '/'})
      NProgress.done();
    }
  }
  
})