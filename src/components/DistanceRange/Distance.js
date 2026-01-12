import {useState} from "react"

const Distance = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const shownValue = Math.round(sliderValue / 10) * 10;
    return (
        <div>
            <h3>Select the distance range</h3>
            <div>
                <input 
                    type="range"
                    name="range"
                    id="range"
                    min="0"
                    max="60"
                    value={sliderValue}
                    onChange={(e) => {
                        setSliderValue(e.target.value)
                    }}
                />
            </div>
            <div>
                {shownValue} KM
            </div>
        </div>
    )
}

export default Distance;