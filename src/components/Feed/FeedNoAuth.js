import { useEffect, useState, useCallback } from "react"
import Post from "./Post"

const FeedNoAuth = () => {
  const token = process.env.REACT_APP_AUTH_TOKEN
  const IP = process.env.REACT_APP_BACKEND_IP

  // 🔹 STATES
  const [items, setItems] = useState([])
  const [cursor, setCursor] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  // 🔹 FETCH FEED (APPEND LOGIC)
  const fetchFeedData = useCallback(async (currentCursor) => {
    if (loading) return

    setLoading(true)

    try {
      const url = currentCursor
        ? `${IP}/api/v1/feed?cursor=${currentCursor}`
        : `${IP}/api/v1/feed`

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      const newItems = data?.resultObj?.items || []
      const pagination = data?.resultObj?.pagination

      setItems(prev => [...prev, ...newItems])
      setCursor(pagination?.nextCursor || null)
      setHasMore(pagination?.hasMore ?? false)

    } catch (err) {
      console.error("Feed fetch error:", err)
    } finally {
      setLoading(false)
    }
  }, [token, IP, loading])

  // 🔹 INITIAL LOAD (FIRST 4 IMAGES)
  useEffect(() => {
    fetchFeedData(null)
  }, [])

  // 🔹 SCROLL LISTENER (LOAD NEXT 4)
  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300

      if (nearBottom && !loading && hasMore) {
        fetchFeedData(cursor)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [cursor, hasMore, loading, fetchFeedData])

  return (
    <div className="flex flex-col items-center w-full gap-6 px-4 py-6 bg-blue-50 rounded-md">
      {items.map(item => (
        <div key={item.imageId} className="w-full max-w-3xl bg-white rounded-md">
          <Post
            imageUrl={item.imageUrl}
            analytics={item.analytics}
            userName={item.userName}
            caption={item.caption}
            location={item.location}
            imageId={item.imageId}
          />
        </div>
      ))}

      {/* 🔹 LOADING INDICATOR */}
      {loading && (
        <div className="text-gray-500 text-sm">Loading more posts...</div>
      )}

      {/* 🔹 NO MORE DATA */}
      {!hasMore && !loading && (
        <div className="text-gray-400 text-sm">No more posts</div>
      )}
    </div>
  )
}

export default FeedNoAuth
