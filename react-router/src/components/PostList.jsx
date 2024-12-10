import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage></WelcomeMessage>
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export const postLoader = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
};

export default PostList;
