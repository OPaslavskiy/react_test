import axios from "axios";
export const GET_POSTS = "GET_POSTS";

export const postsAction = (text) => (alfa) =>
  axios.get(`https://jsonplaceholder.typicode.com/${text}`).then(({ data }) => {
    console.log(data);
    alfa({ type: GET_POSTS, payload: data });
  });
