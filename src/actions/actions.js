"use server";
export async function createPost(formData){
const title = formData.get("title");
if (typeof title !== "string") {
    throw new Error("Title must be a string");
}
const body = formData.get("body");
if (typeof body!== "string") {
    throw new Error("Body must be a string");
}
console.log("Creating new post: ", title, body);
}
//update database