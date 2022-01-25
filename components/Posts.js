import Post from "../components/Post";

const posts = [
    {
        id: '123',
        username: 'Yuena',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'caption!',
    },
    {
        id: '123',
        username: 'Yuena',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'caption!',
    },
    {
        id: '123',
        username: 'Yuena',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'caption!',
    },
]

export default function Posts(){
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} 
                username={post.username} userImg={post.userImg}
                img={post.img} caption={post.caption}/>
            ))}
        </div>
    )
}