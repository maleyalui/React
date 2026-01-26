function SingleUserV2 (prop) {
    const navigate = () =>{
        console.log("Navigate to url",prop.html_url);
        window.open(prop.html_url, "_blank")
    };
    const onMouseHoverCB = () => {
         console.log("Mouse is over", prop.login)

    }
    

    return(
        <div className="m-2 rounded-md shadow-md">
            <div className="rounded-md">
                <img className="rounded-md" onMouseEnter={onMouseHoverCB} src= {prop.avatar_url} alt="" />
            </div>

            <div className="p-4">
            
                <div>
                    Name: {prop.login}
                     </div>

                <button 
                onClick={navigate}
                className="px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active:opacity-50">
                   Github
                </button>
            
        </div>
        </div>
    )
}

export default SingleUserV2;