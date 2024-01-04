export const useImage = ((url) => {
    return new URL(`../assets/${url}`, import.meta.url).href
})