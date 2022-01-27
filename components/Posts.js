import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "../components/Post";

export default function Posts(){
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        //snapshot listener--real time listener to the backend
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp','desc')),snapshot => {
            setPosts(snapshot.docs); //every time snapshot changes, updates our react state with the latest docs
        });

        //this is a cleanup, makes sure we never attach more than one real time listener
        return unsubscribe;

        /**
         * we can make this cleaner by just doing 
         * useEffect(
         *  () => 
         *      onSnapshot(
         *          blah
         *      ),
         *  [db]
         * );
         */
    }, [db]) //db is a dependency

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} 
                username={post.data().username} userImg={post.data().userImg}
                img={post.data().img} caption={post.data().caption}/>
            ))}
        </div>
    )
}