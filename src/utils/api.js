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

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  }).then(res => res.json())

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers
    },
  }).then(res => res.json())

export const createComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId
    }),
  }).then(res => res.json())

export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers
    },
  }).then(res => res.json())

export const updateComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      timestamp: comment.timestamp,
      body: comment.body,
    }),
  }).then(res => res.json()).then(console.log("Updated", comment.id))
