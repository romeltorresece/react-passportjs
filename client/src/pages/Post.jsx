import { useLocation } from 'react-router-dom';
import { posts } from '../data';

function Post() {
    const location = useLocation();
    const id = parseInt(location.pathname.split('/')[2]);
    const post = posts.find(post => post.id === id);
    
  return (
    <div className='post'>
        <img src={post.image} alt='' className='post-img' />
        <h1 className='post-title'>{post.title}</h1>
        <p className='post-desc'>{post.desc}</p>
        <p className='post-long-desc'>{post.longDesc}</p>
    </div>
  );
}

export default Post;