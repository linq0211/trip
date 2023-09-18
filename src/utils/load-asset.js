export const getAssetImg = (image) => {
  /**
   * new URL(url, base) 
   *  url -> 一个表示绝对或相对URL的字符串
   *    如果 url 是相对 URL，则会将 base 用作基准 URL
   *    如果 url 是绝对 URL，则无论参数 base 是否存在，都将被忽略
   *  base -> 基准 URL 的字符串，当 url 为相对 URL 时，它才会生效
   *    import.meta.url指明模块的基本 URL
  */ 
  // console.log(import.meta.url)
  return new URL(`../assets/img/${image}`, import.meta.url)
}