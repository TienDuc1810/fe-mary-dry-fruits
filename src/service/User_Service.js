import axios from './axios';

const loginUser = async (email, password) => {
    const loginUrl = '/api/auth/login';

    const loginData = {
        email: email,
        password: password,
    };

    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(loginUrl, loginData, { headers });
        const { access_token, token_type, expires_in, email } = response;
        return {
            success: true,
            access_token: access_token,
            token_type: token_type,
            expires_in: expires_in,
            email: email,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

const logoutUser = async () => {
    const logoutUrl = '/api/auth/logout';
    const token = localStorage.getItem('jwt');

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    try {
        await axios.post(logoutUrl, {}, { headers });
        return {
            success: true,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};
export { loginUser, logoutUser };
