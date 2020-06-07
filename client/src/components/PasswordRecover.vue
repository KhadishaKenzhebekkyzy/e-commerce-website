<template>
    <div class="passwordrecover" style="clear:both">
        <div class="info">
                <img src="../assets/Astykbaga.png" alt="astykbaga">
        </div>
        <div class="outer">
            <div class="password-form">
                <div class="head">
                    <p><b>Восстановение пароля</b></p>
                </div>
                <div class="password-wrap">
                    <div class="group">
                        <p id="p"><b>Форма восстановления</b></p>
                        <br>
                    </div>
                    <div class="group">
                        <label for="user" class="label">Введите вашу почту</label>
                        <input v-model="email" class="input">
                    </div>
                    <div class="group">
                        <div class="recover">
                            <input type="submit" class="button" @click="sendEmail()" value="Восстановить">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import axios from "axios"    
import {APIService} from '../../../routes/apiService';
const apiService = new APIService();


export default {
    data(){
        return {
            email: '',
            error: null
        }
    },
    methods: {
        sendEmail(){
            apiService.sendEmail(this.email).then((response) => {
                console.log(this.email);
            }). catch(error => 
                console.log(error))
                this.error = error.response.data.error
        }
    }
}

</script>

<style scoped>
    body{
        font-style: normal;
        font-weight: normal;
    }

    .passwordrecover{
        background: #F7F7F7;
        border: 0px;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        padding:20px;
        position: absolute;
        display: block;
        float: left;
        align-items: center;
    }

    @font-face {
            font-family: Lato;
            src: url('../assets/Lato-Regular.ttf');
        }

    .info{
        align-self: center;
        text-align: center;
    }

    .outer{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    img{
        width: 200px;
        height: auto;
        margin-bottom: 50px;
    }

    .head{
        color: #149B5F;
        font-size: 16px;
        padding: 30px;
    }

    .passwordrecover .password-form{
        display: inline-block;
        margin: 0 auto;
        border: 0px;
        max-width:540px;
        min-height: 200px;
        position: absolute;
        background:#FFFFFF;
        box-shadow: 0px 36px 44px rgba(0, 0, 0, 0.1);
        border-radius: 10px 10px 10px 10px;
    }

    .password-wrap{
        width: 340px;
        height:200px;
        position:relative;
        perspective:1000px;
        font-size: 16px;
        margin: 50px;
        margin-top: 20px;
        transform-style:preserve-3d;
    }

    .password-wrap .group .input{
        background-color: #FFFFFF;
        border: 0;
        font-size: 14px;
        border-bottom: 1px solid #8A8A8A;
        width: 100%;
    }

    .password-wrap .group .label{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #A9A9A9;
    }

    .password-wrap .group .button{
        background: #149B5F;
        color: white;
        font-size: 15px;
        border-radius: 45px;
        width: 100%;
        height: 60px;
        margin-top: 40px;
    }

</style>