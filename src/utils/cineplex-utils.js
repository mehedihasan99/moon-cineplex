function getImgUrl(imageName) {
  return new URL(`../assets/movie-covers/${imageName}`, import.meta.url).href
}
export { getImgUrl }
