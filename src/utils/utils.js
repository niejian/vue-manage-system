import router from '@/router'
import MenuUtils from './menuUtils'
export function storeLoginRouters () {
  let menuRouters = localStorage.getItem('menuRouters');
  let routers = [];
  menuRouters = JSON.parse(menuRouters);
  MenuUtils(routers, menuRouters)
  debugger
  router.addRoutes(routers);

  
// 系统已配置路由信息
  // let sysRoutes = router.options.routes;
  // if(sysRoutes && sysRoutes.length > 0) {
  //   for(let i = 0; i < sysRoutes.length; i++) {
  //     let rootRoute = router.options.routes[i];
  //     if(rootRoute.children && rootRoute.children.length > 0 
  //       && rootRoute.path === '/') {
  //         if(routers && routers.length > 0) {
  //           routers.forEach((data) => {
  //             //router.options.routes.push(data)
              
  //             router.options.routes[i].children.push(data)
  //           })
  //         }
  //       }
  //   }
    
  // }

  return routers;
}