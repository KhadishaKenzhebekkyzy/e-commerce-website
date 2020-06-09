import axios from 'axios';
const API_URL = 'http://localhost:3000/api/user';
axios.defaults.port = 3000;
import router from '../client/src/main'

export class APIService{

    constructor(){
    }

    async login(data) {
        const url = 'http://localhost:3000/api/user/login';
        await axios.post(url, data).then(res => {
                        res.data
                    }).catch(error => {
                        console.log("You weren't logged in")
                        alert("The user does not exist")
                    })
    }

    async register(data) {
        const url = 'http://localhost:3000/api/user/register';
        await axios.post(url, data).then(res => {
                        res.data
                        window.location.replace("/login");
                    }).catch(error => {
                        console.log("You weren't registered")
                        alert("The user already exists")
                    })
    }

    async sendEmail(data){
        const url = `http://localhost:3000/api/user/sendEmail`;
        await axios.post(url, data).then(res => {
                        res.data
                        window.location.replace("/success");
                    }).catch(error => {
                        console.log("Email wasn't sent")
                        alert("Problem with the submission")
                    })
    }

    async resetPassword(data){
        const url = `http://localhost:3000/api/user/resetPassword`;
        await axios.put(url, data).then(res => {
                        res.data
                        alert("Password changed!")
                        window.location.replace("/login");
                    }).catch(error => {
                        console.log("Password wasn't updated")
                    })
    }
}
