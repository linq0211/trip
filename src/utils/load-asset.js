export const getAssetImg = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url)
}