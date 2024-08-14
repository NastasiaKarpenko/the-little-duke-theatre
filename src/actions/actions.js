"use client"
export async function createPost(e) {
    e.preventDefault()
    console.log("Creating new post: ", e)
    //validate data

    const title = formData.get("title")
    if (typeof title !== "string") {
        throw new Error("Title must be a string")
    }
    const body = formData.get("body")
    if (typeof body !== "string") {
        throw new Error("Body must be a string")
    }
}
//update database
