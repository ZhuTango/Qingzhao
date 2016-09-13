export function configRouter (router) {
  router.map({
    '/index': {
      name: 'index',
      title: '全部',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/page': {
      name: 'page',
      title: '页面',
      component: (resolve) => require(['./components/page/index.vue'], resolve)
    }
  })

  router.redirect({
    '/': '/'
  })
  /**
   * fix ios title刷新不了的bug
   * @iframeLoad
   * @author hiluluke
   */
  // const iframeLoad = function (src) {
  //   let iframe = document.createElement('iframe')
  //   iframe.style.display = 'none'
  //   iframe.src = src
  //   document.body.appendChild(iframe)
  //   iframe.addEventListener('load', function () {
  //     setTimeout(function () {
  //       iframe.remove()
  //     }, 0)
  //   })
  // }
  // // document title change
  // router.afterEach((transition) => {
  //   document.title = transition.to.title || 'CNode.js'
  //   if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
  //     let src = '/static/fixrouter.html?' + Math.random()
  //     iframeLoad(src)
  //   }
  // })
}
