import postImage from '../camera_lense_0.jpeg'

const Post = () => {
    return (
        <article className='post_container'>
            <div>
                <img src={postImage} alt='blog post' />
            </div>
            <div className='post_body'>
                <h2> How to Rocket Launch </h2>
                <p className='post_info'> 
                    <span className='post_author'> By: Desmond Owusu Ansah </span> 
                    <time className='post_date'> 12/12/2020 </time> 
                </p>
                <p className='post_summary'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos.  
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                </p>
            </div>
      </article>
    )   
}

export default Post;