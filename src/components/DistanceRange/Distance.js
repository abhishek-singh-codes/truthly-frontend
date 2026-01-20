import { useState, useEffect, useCallback } from "react"

const Distance = ({ IP, token }) => {
  // Slider state (temporary)
  const [sliderValue, setSliderValue] = useState(0)

  // Applied range (final)
  const [appliedRange, setAppliedRange] = useState(null)

  // Pagination states
  const [items, setItems] = useState([])
  const [cursor, setCursor] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  // -----------------------------
  // Fetch feed data
  // -----------------------------
  const fetchFeedDataByRange = useCallback(
    async (currentCursor, range) => {
      if (loading || range === null) return

      setLoading(true)

      try {
        let url = `${IP}/api/v1/feed/nearby?range=${range}`

        if (currentCursor) {
          url += `&cursor=${currentCursor}`
        }

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) {
          throw new Error("API failed")
        }

        const data = await res.json()

        const newItems = data?.resultObj?.items || []
        const pagination = data?.resultObj?.pagination || {}

        setItems((prev) => [...prev, ...newItems])
        setCursor(pagination.nextCursor || null)
        setHasMore(pagination.hasMore ?? false)
      } catch (err) {
        console.error("Feed fetch error:", err)
      } finally {
        setLoading(false)
      }
    },
    [IP, token, loading]
  )

  // -----------------------------
  // Apply button handler
  // -----------------------------
  const onApply = () => {
    const km = sliderValue * 10

    // Reset old data
    setItems([])
    setCursor(null)
    setHasMore(true)

    // Set applied range
    setAppliedRange(km)

    // Initial fetch
    fetchFeedDataByRange(null, km)
  }

  // -----------------------------
  // Infinite scroll
  // -----------------------------
  useEffect(() => {
    if (!appliedRange) return

    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300

      if (nearBottom && !loading && hasMore) {
        fetchFeedDataByRange(cursor, appliedRange)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [cursor, hasMore, loading, appliedRange, fetchFeedDataByRange])

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto bg-white rounded-2xl p-6">
      <h3 className="bg-blue-100 rounded-md p-4 border border-blue-200 font-semibold">
        Select the distance range
      </h3>

      <div className="border border-blue-200 rounded-lg w-full p-4">
        <input
          type="range"
          min="0"
          max="6"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex justify-between items-center">
        <h2>{sliderValue * 10} KM</h2>

        <button
          onClick={onApply}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-900 disabled:bg-gray-400 rounded-md px-4 py-2"
        >
          <span className="text-white">
            {loading ? "Loading..." : "Apply"}
          </span>
        </button>
      </div>
    </div>
  )
}

export default Distance
