import React, { useContext, useState } from 'react';
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn()
    const navigate = useNavigate();
    const [login, setlogin] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault();

        const data = { email, password }; // Create an object with email and password

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data), // Stringify the data object to JSON
        };

        try {
            const response = await fetch('https://us-central1-capstore-takeoff.cloudfunctions.net/jwt_func', requestOptions);
            const responseData = await response.json();
            console.log('Response:', responseData);

            // Check if response status is okay (200)
            if (response.ok && responseData.token) {
                signIn({
                    token: responseData.token,
                    expiresIn: 2000,
                    tokenType: "Bearer",
                    authState: responseData.user.Email,
                });


                navigate('/CreateGrocery');
                setlogin(true);
                // Reset form fields
                setEmail('');
                setPassword('');
            } else {
                alert("Please enter valid email"); // Notify the user about invalid login
            }
        } catch (error) {
            alert("Please enter valid data"); // Alert for network errors or other issues
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>

        </div>
    );
};

export default Login;
