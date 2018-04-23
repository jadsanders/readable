const api = "http://localhost:3001/"
const authorizationHeader = "reactisawesome";

export const fetchPosts = () =>
  fetch(api+"posts",{headers: { 'Authorization': authorizationHeader }})
  .then(res => res.json())
  .then(console.log("Posts fetched!"))

export const fetchCategories = () =>
  fetch(api+"categories",{headers: { 'Authorization': authorizationHeader }})
  .then(res => res.json())
  .then(console.log("Categories fetched!"))
