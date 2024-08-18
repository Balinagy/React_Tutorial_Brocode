import { useState } from "react";

function ColorPicker()
{
    function handleColorChange(event)
    {
        setColor(event.target.value);
    }
    const [color, setColor] = useState("#FFFFFF");
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label className="color-picker">
                Select a color:
                <input type="color" onChange={handleColorChange} value={color} className="color-input"/>
            </label>
        </div>
    );
}

export default ColorPicker