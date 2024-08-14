import { fetchPostById } from "@/db/FetchPosts";

async function Page( { params } ) {
    const post = await fetchPostById(params.id);
    
    if (!post) {
        return (
          <main className="px-7 pt-24 text-center">
            <h1 className="text-5xl font-semibold mb-7">Post not found</h1>
          </main>
        );
      }
      
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <p>{post.date}</p>
    </main>
  );
}
export default Page;
