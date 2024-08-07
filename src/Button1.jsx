
function Button1()
{
    const handleClick = (e) =>{
        if(e.target.textContent == "OUCH!")
            {
                e.target.textContent = "Click me!"
            }
        else{
            e.target.textContent = "OUCH!";
        }
    }

    //const handleClick2 = (name) => console.log(`${name} stop clicking me!`);
    //ha nem arrow functionként van meghívva, akkor rögtön callolódik
    //<button onClick={() => handleClick2("Balázs")}>Click me</button>

    return(
        
        <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Button1