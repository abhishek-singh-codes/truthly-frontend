import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  resetFeed,
  enableRangeMode,
  fetchFeedByRange,
} from "../../store/feedSlice";
import useUserLocation from "../../hooks/useUserLocation";

const Distance = () => {
  const token = process.env.REACT_APP_AUTH_TOKEN;
  const IP = process.env.REACT_APP_BACKEND_IP;

  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(0);
  const { lat, long, loading: locationLoading } = useUserLocation();

  const onApply = () => {
    if (locationLoading) return;

    const radius = sliderValue * 10;

    dispatch(resetFeed());
    dispatch(enableRangeMode(radius));
    dispatch(
      fetchFeedByRange({
        IP,
        token,
        radius,
        lat,
        long,
      })
    );
  };

  return (
    <div className="flex flex-col w-full max-w-sm gap-4 p-6 mx-auto bg-white rounded-2xl">
      <h3 className="p-4 font-semibold bg-blue-100 rounded-md">
        Select the distance range
      </h3>

      <input
        type="range"
        min="0"
        max="6"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />

      <div className="flex justify-between">
        <h2>{sliderValue * 10} KM</h2>
        <button
          onClick={onApply}
          disabled={locationLoading}
          className="px-4 py-2 bg-blue-600 rounded-md text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Distance;
