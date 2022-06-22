import { Link } from "react-router-dom";

function Navbar({ user }) {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  return (
    <div className='navbar'>
      <span className='logo'><Link className="link" to='/'>CHOWDER</Link></span>
      <ul className='list'>
        {user ? (
          <>
            <li className='list-item'>
              <img 
                src={user.photos ? user.photos[0].value : 'https://images.unsplash.com/photo-1636114673156-052a83459fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                alt='' 
                className='avatar' 
              />
            </li>
            <li className='list-item'>{user.displayName}</li>
            <li className='list-item' onClick={logout}>Logout</li>
          </>
        ) : (
          <li className="list-item">
            <Link className="link" to='/login'>Login</Link>
          </li>
        )}
      </ul>  
    </div>
  );
}

export default Navbar;