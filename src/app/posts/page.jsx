import React, { Suspense } from "react"
import PostsList from "@/components/Posts-list"

async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Posts</h1>
      <Suspense fallback="Loading....">
        <PostsList />
      </Suspense>
    </main>
  )
}

export default Page
