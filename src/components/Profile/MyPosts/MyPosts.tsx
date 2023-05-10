import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../redux/state';

type MyPostsProps = {
    postData: PostType[]
}

const MyPosts = (props:MyPostsProps) => {
console.log(props.postData);

    let newTextElement = useRef<HTMLTextAreaElement>(null);


    let postsElements = props.postData
    
    const addPost = () => {}   

    const updateText = () => {}

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newTextElement} onChange={()=>{}} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements.map(el=>{
                return(
                    <div>{el.message}</div>
                )
            })}
        </div>
    </div>

};

export default MyPosts;