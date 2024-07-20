const apiToken = process.env.REACT_APP_GITHUB_API_TOKEN;

export const searchUsers = (query) => {
    return fetch(`https://api.github.com/search/users?q=${query}`,{method: 'GET', headers: {Authorization: apiToken}})
        .then(res => res.json())
        .then(data => data.items.slice(0, 5))
        .catch(err => console.log(err))
}

export const fetchData = (url) => {
    return fetch(url,{method: 'GET', headers: {Authorization: apiToken}})
        .then(res => res.json())
        .catch(err => console.log(err))  
}
