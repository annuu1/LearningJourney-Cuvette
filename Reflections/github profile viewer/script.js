let searchForm = document.getElementById('search-form')

function fetchUserInfo(username){
    console.log(username);
    
    let userinfo = fetch(`https://api.github.com/users/${username}`)
    userinfo.then(response => response.json()
    ).then(response=>{
        let result = document.getElementById('search-result')
        result.innerHTML = `
        <div class="card">
            <img src="${response.avatar_url}" alt="avatar">
            <h2>${response.name}</h2>
            <p>${response.bio}</p>
            <p>Followers: ${response.followers}</p>
            <p>Following: ${response.following}</p>
            <p>Public Repositories: ${response.public_repos}</p>
            <a href="${response.html_url}" target="_blank">View Profile</a>
        </div>
        `
        
    })
    
}

searchForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let username = document.getElementById('username').value
    
    if(username == ''){
        console.log('Please enter a username')
        return
    }
    fetchUserInfo(username)
})
