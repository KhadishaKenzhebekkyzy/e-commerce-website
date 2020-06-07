import axios from 'axios';
const API_URL = 'http://localhost:8080';
export class APIService{

constructor(){
}

// async login() {
//     const url = `${API_URL}/api/login/`;
//     return axios.get(url).then(response => response.data);
// }

// async register(pk) {
//     const url = `${API_URL}/api/register/${pk}`;
//     return axios.get(url).then(response => response.data);
// }
async sendEmail(email){
    await axios.post('/api/user/sendEmail', {
        email: this.email
    }).then(res => {
                    res.email
                }).catch(error => {
                    console.log("Email wasn't sent")
                    Promise.reject(error)
                })
}

// async resetPassword(todo){
//     const url = `${API_URL}/resetPassword/`;
//     return axios.get(url).then(response => response.data);
// }
}
