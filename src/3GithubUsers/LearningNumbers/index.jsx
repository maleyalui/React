import { useState } from "react"
import ColorList from "./ColorList"
import NewColor from "./NewColor";

function Colors() {
    const [colors,setColors] = useState(["Blue","Black","Green"]);
    const [activeColor,setActiveColor] = useState("blue")
    return (
        <div style={{backgroundColor:activeColor}} className="p-4">
            <NewColor  colors={colors} setColors={setColors}/>
            <ColorList colors={colors} setActiceColor={setActiveColor} />
        </div>)
}
export default Colors;