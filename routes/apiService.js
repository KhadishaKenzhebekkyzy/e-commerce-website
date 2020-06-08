import axios from 'axios';
const API_URL = 'http://localhost:3000/api/user';
axios.defaults.port = 3000;


export class APIService{

    constructor(){
    }

    async login(data) {
        const url = 'http://localhost:3000/api/user/login';
        await axios.post(url, data).then(res => {
                        res.data
                    }).catch(error => {
                        console.log("You weren't logged in")
                        Promise.reject(error)
                    })
    }

    async register(data) {
        const url = 'http://localhost:3000/api/user/register';
        await axios.post(url, data).then(res => {
                        res.data
                    }).catch(error => {
                        console.log("You weren't registered")
                        Promise.reject(error)
                    })
    }


    async sendEmail(email){
        const url = 'http://localhost:3000/api/user/sendEmail';
        await axios.post(url, {
            email: this.email
        }).then(res => {
                        res.email
                    }).catch(error => {
                        console.log("Email wasn't sent")
                        Promise.reject(error)
                    })
    }

    async resetPassword(data){
        const url = 'http://localhost:3000/api/user/resetPassword';
        await axios.put(url, {
            password: this.password
        }).then(res => {
                        res.data
                    }).catch(error => {
                        console.log("Password wasn't updated")
                        Promise.reject(error)
                    })
    }
}
