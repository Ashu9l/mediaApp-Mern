import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showToast } from '../utils/toast';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { FcGoogle } from 'react-icons/fc';
import "./Login.css"

const Login = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.email || !formData.password) {
                showToast('Registered Email/Password required', 'warning');
                return;
            } else {
                const response = await axios.post('http://localhost:5000/api/auth/login', formData);
                // console.log("response is ",response)
                if (response.data.success) {
                    showToast('Login Successful', 'success');
                    localStorage.setItem('token', response.data.token);
                    // localStorage.setItem('username', response.data.user.name);
                    navigate('/upload');
                } else {
                    showToast(response.data.message, 'warning');
                }
            }
        } catch (error) {
            console.log('Login failed:', error);
        }
    };

    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const googleUser = {
                name: decoded.name,
                email: decoded.email,
                googleId: decoded.sub,
            };

            const response = await axios.post('http://localhost:5000/api/auth/google-auth', googleUser);
            if (response.data.success) {
                showToast('Successfully signed in with Google', 'success');
                // localStorage.setItem('username', response.data.user.name);
                navigate('/upload');
            } else {
                showToast("User Already Registered", 'success');
            }
        } catch (error) {
            console.error('Google auth failed:', error);
            showToast('Google authentication failed', 'error');
        }
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('.form-container', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
    }, []);

    return (
        <div className="login-container">
            <div ref={formRef} className="form-container">
                <h2 className="form-title">Welcome Back</h2>
                <p className="form-subtitle">Enter your credentials to access your account</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-group">
                        <IoMailOutline className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="input"
                        />
                    </div>
                    <div className="input-group">
                        <IoKeyOutline className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="input"
                        />
                    </div>
                    <button type="submit" className="submit-button" >Sign In</button>
                    <div className="google-login">
                        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={() => {
                                    showToast('Google Sign In Failed', 'error');
                                }}
                                theme="filled_blue"
                                shape="rectangular"
                                text="continue_with"
                                useOneTap={true}
                                auto_select={true}
                                className="google-button"
                            />
                        </GoogleOAuthProvider>
                    </div>
                </form>
                <div className="links">
                    <Link to="/forgot-password" className="link">Forgot password?</Link>
                    <Link to="/signup" className="link">Create account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
