import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed, fetchFeedByRange } from "../../store/feedSlice";
import Post from "./Post";
import useUserLocation from "../../hooks/useUserLocation";

const Feed = () => {
  const token = process.env.REACT_APP_AUTH_TOKEN;
  const IP = process.env.REACT_APP_BACKEND_IP;
  if (!IP) {
    throw new Error(
      "REACT_APP_BACKEND_IP is undefined. Check .env and restart server.",
    );
  }

  const dispatch = useDispatch();
  const { items, cursor, hasMore, loading, mode, radius } = useSelector(
    (state) => state.feed,
  );

  const { lat, long, loading: locationLoading } = useUserLocation();

  /* ------------------ Initial Load ------------------ */
  useEffect(() => {
    dispatch(fetchFeed({ IP, token }));
  }, [IP, token, dispatch]);

  /* ------------------ Infinite Scroll ------------------ */
  useEffect(() => {
    const onScroll = () => {
      if (locationLoading) return;

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (!nearBottom || loading || !hasMore) return;

      if (mode === "NORMAL") {
        dispatch(fetchFeed({ IP, token, cursor }));
      } else {
        dispatch(
          fetchFeedByRange({
            IP,
            token,
            radius,
            cursor,
            lat,
            long,
          }),
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [
    cursor,
    hasMore,
    loading,
    mode,
    radius,
    lat,
    long,
    locationLoading,
    IP,
    token,
    dispatch,
  ]);

  return (
    <div className="flex flex-col items-center w-full gap-6 px-4 py-6 rounded-md bg-blue-50">
      {items.map((item) => (
        <div
          key={item.imageId}
          className="w-full max-w-3xl bg-white rounded-md"
        >
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

      {loading && (
        <div className="text-sm text-gray-500">Loading more posts...</div>
      )}

      {!hasMore && !loading && (
        <div className="text-sm text-gray-400">No more posts</div>
      )}
    </div>
  );
};

export default Feed;
