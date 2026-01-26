import { useState } from "react";

function StateNumber(){
    const [n,updateN] = useState(0);

    // const n = state[0];
    // const updateN = state[1];
    
    
    const increment = () => {
        console.log("Increment pressed");
        let newV = n + 1;
        updateN(newV);
    }
    const decrement = () => {
        console.log("Decrement pressed");
        let newV = n-1;
        updateN(newV);
    }
    return(
        <div className="p-4"> 
            <Button text= {"+"} color="red" actionFunc={increment}
            />
            <span>{n}</span>

         <Button text={"-"} color="blue" actionFunc={decrement}/>
        </div>
    );
}

function Button(prop) {
    const {text, color, actionFunc} = prop

    return(
         <button className=" m-2 rounded-full shadow-md text-white font-bold active:opacity-50 cursor-pointer" 
            style={{
                width: "20px",
                height: "20",
                backgroundColor: color,
            }}
            onClick={actionFunc}
            > 
            {text}
            </button>
    )
}

export default StateNumber;