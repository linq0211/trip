import MyRequest from "../request"

export function getHomeHotSuggests() {
  return MyRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getHomeCategories() {
  return MyRequest.get({
    url: "/home/categories"
  })
}

export function getHomeHouseList(currentPage) {
  return MyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}