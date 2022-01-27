import {
    DotsHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    ChatIcon,
    BookmarkIcon,
    EmojiHappyIcon,
} from "@heroicons/react/outline";

import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import { addDoc, serverTimestamp, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Post({id,username,userImg,img,caption}){
    const { data: session } = useSession();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    
    useEffect(
        () => 
            onSnapshot(
                query(
                    collection(db,'posts',id,'comments'),
                    orderBy('timestamp','desc')
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db],
    );

    const sendComment = async (e) => {
        e.preventDefault(); //prevent page refreshing
        const commentToSend = comment;
        setComment(" "); //set comment in the UI to be empty, just to prevent spamming

        //very modular--going to collection posts, the id of the post, then to comments
        console.log(id);
        await addDoc(collection(db,'posts',id,'comments'),
        {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };


    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt=""/>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>

            <img src={img} className="object-cover w-full"/>
            {/* <Buttons /> */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
                <div>
                    <BookmarkIcon className="btn"/>
                </div>
            </div>
            {/* <Caption /> */}
            <p className="p-5 truncate">
                <span className="mr-1"><b>{username}</b> </span>
                {caption}
            </p>
            {/* <Comments /> */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map(comment => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={comment.data().userImage} alt=""/>
                            <p className="text-sm flex-1"><span className="font-bold">{comment.data().username}</span> {comment.data().comment}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* <InputBox /> */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder='Add a comment...' className="border-none flex-1 focus:ring-0"/>
                <button type="submit" onClick={sendComment} disabled={!comment.trim()} className="font-seibold text-blue-400">Post</button>
            </form>
        </div>
    )
}