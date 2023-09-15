import MyRequest from "../request"

export function getCityAll() {
  return MyRequest.get({
    url: "/city/all"
  })
}