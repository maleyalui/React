import users from "./../users.json"
import SingleUserV2 from "./SingleUserV2";

function UserSection() {
    function toMap(item, index){
            return (
                
                <SingleUserV2
                key = {item.id}
                avatar_url = {item.avatar_url}
                html_url = {item.html_url}
                login = {item.login}
                />
            );
            }
            
    return (
        <div className="flex flex-wrap ">{users.map(toMap)}</div>
    );
}
export default UserSection;