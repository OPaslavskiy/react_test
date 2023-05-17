import axios from "axios";
export const GET_POSTS = "GET_POSTS";

export const postsAction = () => (dispatch) =>
  axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
    console.log(data);
    dispatch({ type: GET_POSTS, payload: data });
  });
