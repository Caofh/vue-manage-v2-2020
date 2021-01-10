
import cookie from 'component-cookie' // 第三方cookie插件：首页地址：https://github.com/component/cookie#readme

// 坐标像素转换(count:设计图(750)上的px值)，设计图的px => 真实dom中的px
function changePx(count) {
  const winWidth = window.screen.width;
  const ratio = winWidth / 750; // 比例
  return count * ratio;
}

// 防抖中心思想：如果频繁操作，在setTimeout未执行前就clearTimeout，则当前setTimeout就不会执行。
function debounce(method, delay) {
  let timer = null
  return function () {
    let self = this,
      args = arguments

    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      method.apply(self, args)


    }, delay)

  }

}

// 节流：如果频繁操作，在setTimeout未执行前就clearTimeout，则当前setTimeout就不会执行。
function throttle(method, duration) {
  let timer = null
  let startTime = new Date()

  return function () {
    let endTime = new Date()
    let self = this
    let args = arguments

    clearTimeout(timer)
    if (endTime - startTime >= duration) {
      method.apply(self, args)
      startTime = endTime
    } else {
      timer = setTimeout(function () {
        method.apply(self, args)
      }, duration)
    }
  }

}

// 判断是否是pc端
function isPC() {
  let userAgentInfo = navigator.userAgent;
  let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag;
}

//设置页面rem
function setRem(baseVal = 10) {
  const win = window
  const doc = document

  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
  const recalc = () => {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = (clientWidth / baseVal) + 'px'
  }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}

/* 禁止整个页面滚动
  stopScroll(true)
*/
function stopScroll(control = true) {
  if (control) {
    $('body').addClass('overflow-hidden')
  } else {
    $('body').removeClass('overflow-hidden')
  }
}

/* 加载img，完成后执行then后的逻辑
  let imgUrl = 'https://tpdoc.cn/erp/uploads/image/cut_133301_3487.png'
  loadImage(imgUrl).then((url) => {
    console.log(url)
  })
*/
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      resolve(url)
      return
    }
    img.onload = () => {
      resolve(url)
    }
    img.onerror = () => {
      resolve(url)
    }
  })
}

export {
  changePx,
  debounce,
  throttle,
  isPC,
  setRem,
  stopScroll,
  loadImage,
};
