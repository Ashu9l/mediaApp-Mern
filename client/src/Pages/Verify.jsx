import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/toast';
import './styles/Verify.css'; // Ensure to create this CSS file

export const Verify = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = async () => {
        const otpCode = otp.join('');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ otp: otpCode }),
            });
            
            if (response.ok) {
                showToast('Verification successful', 'success');
                navigate('/');
            } else {
                showToast('Verification failed', 'error');
            }
        } catch (error) {
            showToast('Error verifying OTP', 'error');
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/resend-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            
            if (response.ok) {
                showToast('OTP resent successfully', 'success');
            } else {
                showToast('Failed to resend OTP', 'error');
            }
        } catch (error) {
            showToast('Error resending OTP', 'error');
        }
    };

    return (
        <div className="verify-container">
            <div className="form-container">
                <h2 className="form-title">Enter Your Email Verification Code Here</h2>
                <div className="otp-inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            className="otp-input"
                            maxLength="1"
                        />
                    ))}
                </div>
                <button className="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
                <button className="resend-button" onClick={handleResendOtp}>
                    Resend OTP
                </button>
            </div>
        </div>
    );
};

// export default Verify;
