'use client'
import { createPost } from "../../actions/actions"
function Page() {


    return (<main className="text-center pt-32 px-5">
        <h2 className="text-4xl md:text-5xl font-bold">Create Post</h2>
        <form className="flex flex-col  mx-auto mt-10 gap-2 my-10 max-w-[400px]" >
            <input
                type="text"
                name="title"
                placeholder="title for new post"
                className="border rounded px-3 h-10"
                required
            />
            <textarea
                name="body"
                placeholder="content for new post"
                className="border rounded px-3 py-2"
                rows={6}
                required
            />
            <div className="hero-buttons flex space-x-4 justify-center">
                <button onClick={createPost} type="submit" className="h-10 my-2 leading-4">Submit</button>
            </div>
        </form>
    </main>

    )
}
export default Page
