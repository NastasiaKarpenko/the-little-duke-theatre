import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function FetchPosts() {
  let posts = [];
  try {
    const data = await getDocs(collection(db, "posts"));
    posts = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return posts;
}

export async function fetchPostById(postId) {
  let post = null;
  try {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      post = { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
  return post;
}