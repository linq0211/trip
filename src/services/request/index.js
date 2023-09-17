import useMainStore from "@/store/modules/main";
import axios from "axios";

const mainstore = useMainStore()

class MyRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 在每次请求拦截时进行加载和取消loading动画
    this.instance.interceptors.request.use(config => {
      mainstore.isLoading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainstore.isLoading = false
      return res
    }, err => {
      mainstore.isLoading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, methods: "get"})
  }

  post(config) {
    return this.request({ ...config, methods: "post"})
  }
}

export default new MyRequest("http://123.207.32.32:1888/api")