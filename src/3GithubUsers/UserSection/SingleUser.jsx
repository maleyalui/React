function SingleUser() {
    const user = {
    "login": "kevinclark",
    "id": 20,
    "node_id": "MDQ6VXNlcjIw",
    "avatar_url": "https://avatars.githubusercontent.com/u/20?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kevinclark",
    "html_url": "https://github.com/kevinclark",
    "followers_url": "https://api.github.com/users/kevinclark/followers",
    "following_url": "https://api.github.com/users/kevinclark/following{/other_user}",
    "gists_url": "https://api.github.com/users/kevinclark/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kevinclark/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kevinclark/subscriptions",
    "organizations_url": "https://api.github.com/users/kevinclark/orgs",
    "repos_url": "https://api.github.com/users/kevinclark/repos",
    "events_url": "https://api.github.com/users/kevinclark/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kevinclark/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }
  
  console.log(user.login);
  console.log(user.avatar_url);
  console.log(user.html_url);
  
  return <div>
    <div>
        <img src={user.avatar_url} alt={user.html_url}/>
    </div>

    <ul>
        <li>
          Name: <b>{user.login}</b>
          </li>
        <li>
          url: <a className="text-blue-700 underline" href={user.html_url}>Github</a>
           </li>
    </ul>

  </div>

}
export default SingleUser