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

        return {
            success: true,
            response: response,
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

const dataUser = async () => {
    const dataUrl = '/api/auth/profile';

    const token = localStorage.getItem('jwt');

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.get(dataUrl, {}, { headers });

        return {
            success: true,
            response: response,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

const editDataUser = async (fullname, phone, address, password) => {
    const editDataUrl = '/api/auth/edit_profile';

    const token = localStorage.getItem('jwt');

    const editData = {
        full_name: fullname,
        phone: phone,
        address: address,
        password: password,
    };

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.post(editDataUrl, editData, { headers });

        return {
            success: true,
            response: response,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

export { loginUser, logoutUser, dataUser, editDataUser };
