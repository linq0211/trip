import axios from "axios";

class MyRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
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