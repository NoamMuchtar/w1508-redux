import { useSelector } from "react-redux";

function PostTitles() {
  let posts = useSelector((state) => state.postsReducer.posts);
  return (
    <>
      <h1>Posts Titles</h1>
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
}

export default PostTitles;
