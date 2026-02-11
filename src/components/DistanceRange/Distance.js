import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  resetFeed,
  enableRangeMode,
  fetchFeedByRange,
} from "../../store/feedSlice";
import useUserLocation from "../../hooks/useUserLocation";
import Cookies from "js-cookie";

const Distance = () => {
  const token = Cookies.get("access_token");
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
    <div className="z-30 flex flex-col w-full gap-4">
      <h3 className="p-4 font-semibold bg-gray-300 border rounded-md">
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
        <h2 className="text-white">{sliderValue * 10} KM</h2>
        <button
          onClick={onApply}
          disabled={locationLoading}
          className="px-4 py-2 text-black bg-gray-300 rounded-md hover:bg-black hover:border hover:text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Distance;
