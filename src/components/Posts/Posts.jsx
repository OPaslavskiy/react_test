import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../redux/actions/postsAction";

export function Posts() {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(postsAction("users"));
  }, []);

  return (
    <ul>
      {/* {posts.map(({ title, body, id }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))} */}
      fgjgjtfg
    </ul>
  );
}
