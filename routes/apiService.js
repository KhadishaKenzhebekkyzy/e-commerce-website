import axios from 'axios';
const API_URL = 'http://localhost:3000/api/user';
axios.defaults.port = 3000;


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
    await axios.post('http://localhost:3000/api/user/sendEmail', {
        "email": this.email
    }).then(res => {
                    res.email
                }).catch(error => {
                    console.log("Email wasn't sent")
                    Promise.reject(error)
                })
}

async resetPassword(data){
   
    await axios.put('http://localhost:3000/api/user/resetPassword', {
        password: this.password
    }).then(res => {
                    res.data
                }).catch(error => {
                    console.log("Password wasn't updated")
                    Promise.reject(error)
                })
}

// async resetPassword(todo){
//     const url = `${API_URL}/resetPassword/`;
//     return axios.get(url).then(response => response.data);
// }
}
