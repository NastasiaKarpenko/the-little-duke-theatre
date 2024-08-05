import Link from "next/link";
import { FetchPosts } from "../db/FetchPosts";

async function PostsList() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a slow connection.
  
const posts = await FetchPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostsList;