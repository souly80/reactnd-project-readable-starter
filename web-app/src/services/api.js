
const api = "http://localhost:3001"



let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${api}/categories/`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

export const getCategoryPost = () =>
    fetch(`${api}/:category/posts`, { headers })
        .then(res => res.json())
        .then(data => data.books)



export const getPost = () =>
fetch(`${api}/posts`, { headers })
    .then(res => res.json())
.then(data => data.books)

export const posts = (body) =>
fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
}).then(res => res.json())