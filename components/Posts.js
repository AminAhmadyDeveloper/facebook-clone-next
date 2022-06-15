import { store, collection, orderBy, query } from "./../firebase"
import { useCollection } from "react-firebase-hooks/firestore"
import Post from "./Post"

function Posts() {
    const [realTimePosts, _, __] = useCollection(query(collection(store, 'posts'), orderBy("timestamp", "desc")));

    return (
        <div>
            {realTimePosts?.docs.map((post, postIndex) => {
                return (
                    <Post
                        key={postIndex}
                        name={post.data()?.name}
                        message={post.data()?.message}
                        email={post.data()?.email}
                        timestamp={post.data()?.timestamp}
                        image={post.data()?.image}
                        postImage={post.data()?.postImage}
                    />
                )
            })}
        </div>
    );
}

export default Posts;