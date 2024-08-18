import { useState } from "react"

function ArrayStateUpdate(){
    const [foods, setFoods] = useState(["apple","orange", "banana"]);

    function HandleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f=>[...f, newFood]);
    }

    function HandleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food,index)=><li key={index} onClick={()=>HandleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={HandleAddFood}>Add food</button>
    </div>);
}
export default ArrayStateUpdate;