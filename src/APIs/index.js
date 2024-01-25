export const searchUsers = (query) => {
    return fetch(`https://api.github.com/search/users?q=${query}`,{method: 'GET', headers: {Authorization: 'token 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'}})
        .then(res => res.json())
        .then(data => data.items.slice(0, 5))
        .catch(err => console.log(err))
}

export const fetchData = (url) => {
    return fetch(url,{method: 'GET', headers: {Authorization: 'token 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'}})
        .then(res => res.json())
        .catch(err => console.log(err))  
}
