import MyRequest from "../request"

export function getHomeHotSuggests() {
  return MyRequest.get({
    url: "/home/hotSuggests"
  })
}