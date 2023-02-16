import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Ezra" body="React.js is awesome" />  
            <Post author="Manuel" body="I'm learning it as well" />
        </ul>
        </>
    )
}

export default PostsList;