import axios from 'axios';

const loginUser = async (email, password) => {
    const loginUrl = 'http://localhost:8000/api/auth/login';

    const loginData = {
        email: email,
        password: password,
    };

    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(loginUrl, loginData, { headers });
        const { access_token, token_type, expires_in } = response.data;
        return {
            success: true,
            access_token: access_token,
            token_type: token_type,
            expires_in: expires_in,
        };

    } catch (error) {
        if (error.response.status === 401) {
            console.log('Incorrect email or password');
        } else {
            console.log('Authentication error:', error.response.data);
        }

        return {
            success: false,
            error: error.response ? error.response.data : error.message,
        };
    }
};

export { loginUser };
