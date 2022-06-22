import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Card({ post }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className='card'>
      <Link className='title' to={`/posts/${post.id}`}>
        <h4>{post.title}</h4>
      </Link>
        <img src={post.image} alt='' className='img' />
        <p className='desc'>{post.desc.substring(0, 75)}...</p>
        <button className="btn" onClick={onClick}>Read More</button>
    </div>
  );
}

export default Card;