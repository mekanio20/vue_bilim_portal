export const useImage = ((url) => {
    return new URL(`../assets/img/${url}`, import.meta.url).href
})