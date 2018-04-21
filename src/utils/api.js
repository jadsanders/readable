const api = "http://localhost:3001/"
const authorizationHeader = "reactisawesome";

export const fetchPosts = () =>
  fetch(api+"posts",{headers: { 'Authorization': authorizationHeader }})
  .then(res => res.json())

export const fetchCategories = () =>
  fetch(api+"categories",{headers: { 'Authorization': authorizationHeader }})
  .then(res => res.json())
