import Button from "@/components/Button";
import { createPost } from "@/actions/actions"
function Page(){
   
    
    return(<main className="text-center pt-32 px-5">
        <h2 className="text-4xl md:text-5xl font-bold">Create Post</h2>
        <form action={createPost} className="flex flex-col space-x-2   mx-auto mt-10 gap-2 my-10 max-w-[400px]">
           < input 
           type="text"
           name="title"
           placeholder="title for new post"
           className="border rounded px-3 h-10"
           required
           />
           <textarea 
           name="body"
           placeholder="content for new post"
           className="border rounded px-3  py-2"
           rows={6}
           required />

           <div className="hero-buttons flex space-x-4 justify-center">
           <button type="submit" className="h-10 my-2 bg-gradient-to-r from-sky-500 to-blue-400 hover:from-pink-500 hover:to-sky-500 text-white font-bold py-3 px-6 rounded flex align-middle justify-center text-center leading-4">Submitt</button>
           </div>
        </form>
    </main>
        
    )
}
export default Page;