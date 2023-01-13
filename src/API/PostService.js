import axios from "axios"

export class PostService {
    static async getQuizList () {
        const response = await axios.get('http://127.0.0.1:8000/api/quiz/')
        return response.data;
    }

    static async getQuiz (id) {
        const response = await axios.get(`http://127.0.0.1:8000/api/quiz/${id}/`)
        return response.data;
    }

    static async checkUserAuth () {
        let user = {};
        let auth = false;

        const response = await axios.get('http://127.0.0.1:8000/api/auth/users/', {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token'),
            }
        })

        if (!Object.keys(response.data).includes('details')) {
            user = {...response.data.results[0], is_authenticated: true};
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

    static async registerUser (formData) {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/users/', formData)
        return response.data;
    }

    static async loginUser (formData) {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/token/login/', formData)

        if (Object.keys(response.data).includes('non_field_errors')){
            console.log(response.data.non_field_errors)
            return response.data;
        }

        localStorage.setItem('token', response.data.auth_token)
        return response.data
    }
}