import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

function Login() {
  const onGoogleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  const onGithubLogin = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  const onFacebookLogin = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  };

  return (
    <div className='login'>
      <h1 className='login-title'>Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-btn">
            <button 
              className="btn btn-google"
              onClick={onGoogleLogin}>
                <FaGoogle 
                  size='1.2rem' 
                  style={{margin: '0 10px'}}
                /> Google
              </button>
          </div>
          <div className="login-btn">
            <button 
              className="btn btn-facebook"
              onClick={onFacebookLogin}>
                <FaFacebook 
                  size='1.2rem' 
                  style={{margin: '0 10px'}}
                /> Facebook
              </button>
          </div>
          <div className="login-btn">
            <button 
              className="btn btn-github"
              onClick={onGithubLogin}>
                <FaGithub 
                  size='1.2rem' 
                  style={{margin: '0 10px'}}
                /> Github
              </button>
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button type='submit' className='btn'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;