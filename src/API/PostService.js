import axios from "axios"

export class PostService {
    static async getQuizList (limit = 10, offset = 0) {
        const response = await axios.get('http://127.0.0.1:8000/api/quiz/', {
            params:{
                limit: limit,
                offset: offset,
            }
        })
        return response.data;
    }

    static async getQuiz (id) {
        const response = await axios.get(`http://127.0.0.1:8000/api/quiz/${id}/`)
        return response.data;
    }

    static async deleteQuiz (id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/quiz/${id}/`, {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token'),
            }
        })
        return response.data;
    }

    static async getUser (id) {
        const response = await axios.get(`http://127.0.0.1:8000/api/auth/users/${id}/`);
        return response.data;
    }

    static async getUserList () {
        const response = await axios.get(`http://127.0.0.1:8000/api/auth/users/`)
        return response.data.results;
    }

    static async checkUserAuth () {
        let user = {};
        let auth = false;

        const token = localStorage.getItem('token');

        if (!token)
            return [user, auth]

        const response = await axios.get('http://127.0.0.1:8000/api/auth/users/me/', {
            headers: {
                Authorization: 'Token ' + token,
            }
        })

        if (!Object.keys(response.data).includes('details')) {
            user = {...response.data};
            auth = true;
        }

        return [user, auth]
    }

    static async addPost (test) {
        const response = await axios.post('http://127.0.0.1:8000/api/quiz/', test, {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token'),
            }
        })
        return response.data;
    }

    static async sendResults (info, isAuth = false) {
        if (isAuth) {
            const response = await axios.post('http://127.0.0.1:8000/api/quizresult/', info, {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token'),
                }
            })
            return response.data;            
        }
        else {
            const response = await axios.post('http://127.0.0.1:8000/api/quizresult/', info)
            return response.data;   
        }

    }

    static async registerUser (formData) {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/users/', formData)
        return response.data;
    }

    static async changeUserData (formData, id) {
        const response = await axios.patch(`http://127.0.0.1:8000/api/auth/users/${id}/`, formData, {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token'),
            }
        })

        return response;
    }

    static async loginUser (formData) {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/token/login/', formData)
        localStorage.setItem('token', response.data.auth_token)
        return response.data
    }

    static async logoutUser () {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/token/logout/', {}, {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token'),
            }
        })

        localStorage.removeItem('token')
        return response.data
    }
}