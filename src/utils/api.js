const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'reactisawesome'
}

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(res => res.json())

export const fetchPostDetails = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(res => res.json())

export const fetchComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
  .then(res => res.json())

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => res.json())

export const updateVote = (id, direction, entity) =>
  fetch(`${api}/${entity}/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: direction
    }),
  }).then(res => res.json())

  export const createPost = (post) =>
    fetch(`${api}/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: post.id,
        timestamp: post.timestamp,
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category
      }),
    }).then(res => res.json())

  export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        ...headers
      },
    }).then(res => res.json())
