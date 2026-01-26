function SearchSection() {
    console.log("Search section rendered");
    console.log("State forces a render of all components using the state");
    

    let Searchvalue = "This is search value";
    const userInput = (e) => {
        console.log(e);
        const value = e.target.value;
        // console.log("Input value is",value)
        Searchvalue = e.target.value;
        console.log("search value is", Searchvalue);
        
        
    }
    return (
        <div className=" flex justify-center my-4">
            <div className="flex items-center">
                
            <input  className="py-0.5 px-2 border" type="text" onChange={userInput} />
            <button className=" rounded px-2 py-1 text-white bg-blue-500 cursor-pointer">
                Search
            </button>

        </div>
        </div>
    )
}
export default SearchSection;