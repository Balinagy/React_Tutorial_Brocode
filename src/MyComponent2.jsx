import { useState } from "react"

function MyComponent2(){
    const[car, setCar] = useState({year:2000,make:"Toyota",model:"Hilux"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <p>Year:</p>
            <input type="number" value={car.year} onChange={handleYearChange}></input><br></br>
            <p>Make:</p>
            <input type="text" value={car.make} onChange={handleMakeChange}></input><br></br>
            <p>Model:</p>
            <input type="text" value={car.model} onChange={handleModelChange}></input>
        </div>
    );
}

export default MyComponent2