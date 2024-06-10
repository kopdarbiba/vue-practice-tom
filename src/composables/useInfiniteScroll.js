import { onMounted, onUnmounted } from 'vue'

export function useInfiniteScroll(loadMore) {
  const handleScroll = () => {
    const bottomOfWindow =
      window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 10
    if (bottomOfWindow) {
      loadMore()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
