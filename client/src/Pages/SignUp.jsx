import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FcGoogle } from 'react-icons/fc';
import { IoMailOutline, IoKeyOutline, IoPersonOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showToast } from '../utils/toast';
import { jwtDecode } from 'jwt-decode';
import './SignUp.css'
export const SignUp = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!formData.email || !formData.password || !formData.confirmPassword || !formData.name) {
                showToast('All fields required', 'error');
                return;
            } else if (formData.password !== formData.confirmPassword) {
                showToast('Confirm your password', 'info');
                return;
            } else {
                const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
                if (response.data.success) {
                    showToast(response.data.message, 'success');
                    navigate('/verify');
                } else {
                    showToast(response.data.message, 'warning');
                }
            }
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };
    
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('.form-container', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
    }, []);

    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const googleUser = {
                name: decoded.name,
                email: decoded.email,
                googleId: decoded.sub,
                picture: decoded.picture
            };

            const response = await axios.post('/api/user/google-auth', googleUser);
            if (response.data.success) {
                showToast('Successfully signed in with Google', 'success');
                navigate('/');
            } else {
                showToast(response.data.message, 'warning');
            }
        } catch (error) {
            console.error('Google auth failed:', error);
            showToast('Google authentication failed', 'error');
        }
    };

    return (
        <div className="signup-container">
            <div ref={formRef} className="form-container">
                <h2 className="form-title">Create Account</h2>
                <p className="form-subtitle">Sign up to get started with your new account</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-group">
                        <IoPersonOutline className="input-icon" />
                        <input type="text" placeholder="Full Name" name='name' value={formData.name} onChange={handleChange} className="input" />
                    </div>
                    <div className="input-group">
                        <IoMailOutline className="input-icon" />
                        <input type="email" placeholder="Email address" name='email' value={formData.email} onChange={handleChange} className="input" />
                    </div>
                    <div className="input-group">
                        <IoKeyOutline className="input-icon" />
                        <input type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} className="input" />
                    </div>
                    <div className="input-group">
                        <IoKeyOutline className="input-icon" />
                        <input type="password" placeholder="Confirm Password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} className="input" />
                    </div>
                    <button type="submit" className="submit-button">Sign Up</button>
                    <button className="google-button">
                        <FcGoogle size={22} className="google-icon" />
                        Continue with Google
                    </button>
                </form>
                <div className="login-link">
                    <span>Already have an account? </span>
                    <Link to="/login" className="link">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

// export default SignUp;
