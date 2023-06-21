import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';


const Login = ({ onLogin }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Login successful, navigate to the AddStore component
          navigate('/addstore');
          setIsLoggedIn(true);
          onLogin();
        } else {
          // Login failed, display error message or handle accordingly
          console.log('Login failed');
          navigate('/login');

        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  const handleFacebookLogin = (response) => {
    // Handle Facebook login response
    navigate('/addstore');
  };
  const handleGoogleLoginSuccess = (response) => {
    // Handle successful login
    console.log('Google login successful:', response);
    navigate('/addstore');

  };
  
  const handleGoogleLoginFailure = (error) => {
    // Handle login failure
    console.log('Google login failed:', error);
    navigate('/login');

  };
  
  return (
    <React.Fragment>
                <section class="about-section text-center" id="login">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-12">
                <section class="vh-100" >
                <div class="container py-5 h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div class="card shadow-2-strong bg-black" >
                        <div class="card-body p-5 text-center">
                        <form onSubmit={handleSubmit}>
                          <h3 class="mb-5">Sign in</h3>
              
                          <div class="form-outline mb-4 text-start">
                          <label class="form-label" for="typeEmailX-2">Email</label>
                            <input type="email" id="typeEmailX-2" class="form-control form-control-lg" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                          </div>
              
                          <div class="form-outline mb-4 text-start">
                          <label class="form-label" for="typePasswordX-2">Password</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                          </div>
              
                          <div class="form-check d-flex justify-content-start mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                            <label class="form-check-label" for="form1Example3"> Remember password </label>
                          </div>
              
                          <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                          <p class="text-center text-muted mt-5 mb-0">Have no account? <a href="/register"
                                              class="fw-bold text-body" ><u>Register here</u></a></p>
                          <hr class="my-4"/>
              
                          <div>
                            <FacebookLogin
                                appId="1186833128664865"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={handleFacebookLogin}
                            />
                            </div>
                            <GoogleLogin
                              clientId="563505594390-gmte8l2g3hl6lhbsrneu16b0go76ee3s.apps.googleusercontent.com"
                              render={(renderProps) => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} id="google">
                                  LOGIN WITH GOOGLE
                                </button>
                              )}
                              onSuccess={handleGoogleLoginSuccess}
                              onFailure={handleGoogleLoginFailure}
                              cookiePolicy={'single_host_origin'}
                            />
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              </div>
              </div>
              <img class="img-fluid" src="assests/images/about.jpg" alt="..." id='aboutimg'/>
            </div>
            </section>
    </React.Fragment>
  );
};
export default Login;
