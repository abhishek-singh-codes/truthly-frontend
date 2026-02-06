import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed, fetchFeedByRange } from "../../store/feedSlice";
import Post from "./Post";
import useUserLocation from "../../hooks/useUserLocation";

const Feed = () => {
  const token = process.env.REACT_APP_AUTH_TOKEN;
  const IP = process.env.REACT_APP_BACKEND_IP;

  const dispatch = useDispatch();
  const {
    items,
    normalCursor,
    rangeCursor,
    hasMore,
    loading,
    mode,
    radius,
  } = useSelector((state) => state.feed);

  const { lat, long, loading: locationLoading } = useUserLocation();

  const cursor = mode === "NORMAL" ? normalCursor : rangeCursor;

  /* ---------- INITIAL LOAD ---------- */
  useEffect(() => {
    if (mode === "NORMAL") {
      dispatch(fetchFeed({ IP, token }));
    }
  }, [mode, IP, token, dispatch]);

  /* ---------- INFINITE SCROLL ---------- */
  useEffect(() => {
    const onScroll = () => {
      if (locationLoading || loading || !hasMore) return;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300;

      if (!nearBottom) return;

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
          })
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
    <div className="flex flex-col items-center w-full gap-6">
      {items.map((item) => (
        <div key={item.imageId} className="w-full max-w-3xl rounded-md">
          <Post {...item} />
        </div>
      ))}

      {loading && <div className="text-sm text-gray-500">Loading...</div>}
      {!hasMore && !loading && (
        <div className="text-sm text-gray-400">No more posts</div>
      )}
    </div>
  );
};

export default Feed;
