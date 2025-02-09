import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/toast';
import './Verify.css'; // Ensure to create this CSS file

const Verify = () => {
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

    const handleSubmit = () => {
        const otpCode = otp.join('');
        // Add your submit logic here
        showToast('OTP submitted: ' + otpCode, 'success');
        navigate('/upload'); // Redirect after submission
    };

    const handleResendOtp = () => {
        // Add your resend OTP logic here
        showToast('OTP resent', 'info');
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

export default Verify;
