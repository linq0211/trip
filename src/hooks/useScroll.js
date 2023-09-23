import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false)
  const scrollTop = ref(0) // 超出视图上方的高度
  const scrollHeight = ref(0) // 总的窗口高度
  const clientHeight = ref(0) // 可见窗口的高度

  // 节流，一段时间执行一次
  const scroll = throttle(() => {
    if(el === window) {
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      clientHeight.value = document.documentElement.clientHeight
    } else {
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
      clientHeight.value = el.clientHeight
    }
    if (scrollTop.value + clientHeight.value >= scrollHeight.value - 1) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", scroll)
  })
  onUnmounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.removeEventListener("scroll", scroll)
  })

  return {
    scrollTop,
    isReachBottom
  }
}