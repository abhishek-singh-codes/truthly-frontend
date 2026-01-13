import {useState} from "react"

const Distance = () => {
    const [sliderValue, setSliderValue] = useState(0);
    //const shownValue = Math.round(sliderValue / 10) * 10;
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto bg-white rounded-2xl  p-6">
            <h3 className="bg-blue-100 rounded-md p-4 border border-blue-200 font-semibold">Select the distance range</h3>
            <div className="border border-blue-200 rounded-lg w-full p-4">
                <input 
                    type="range"
                    name="range"
                    id="range"
                    min="0"
                    max="6"
                    value={sliderValue}
                    onChange={(e) => {
                        setSliderValue(e.target.value)
                    }}
                    className="w-full"
                />
            </div>
            <div className="flex justify-between items-center">
                <h2>{sliderValue * 10} KM</h2>
                <button className="bg-blue-600 hover:bg-blue-900 rounded-md p-2">
                    <h4 className="text-white">Apply</h4>
                </button>
            </div>
        </div>
    )
}

export default Distance;