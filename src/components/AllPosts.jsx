// components/AllPosts.jsx
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPostAction } from "../redux/PostsState";

function AllPosts() {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(setAllPostAction(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <h1>All Posts</h1>
      {posts.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
              <th>userId</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
}

export default AllPosts;
