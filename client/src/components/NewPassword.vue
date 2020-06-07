<template>
    <div class="newpassword">

        <div class="info">
                <img src="../assets/Astykbaga.png" alt="astykbaga">
        </div>
        <div class="outer">
            <div class="new-password-form">
                <div class="head">
                    <p><b>Введите новые данные</b></p>
                </div>
                <div class="new-password-wrap">
                    <div class="group">
                        <label for="user" class="label">Новый пароль</label>
                        <input v-model="password" id="user" type="password" class="input">
                    </div>
                    <div class="group">
                        <label for="user" class="label">Повторите пароль</label>
                        <input v-model="password" id="user2" type="password" class="input">
                    </div>
                    <div class="group">
                        <div class="recover">
                            <!-- <router-link to="/"> -->
                            <input type="submit" class="button" value="Сохранить пароль" @click="resetPassword">
                            <!-- </router-link> -->
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"    
import {APIService} from '../../../routes/apiService';
const apiService = new APIService();

export default {
    data(){
        return {
            password: '',
            error: null
        }
    },
    methods: {
        resetPassword(){
            apiService.resetPassword(this.password).then((response) => {
                console.log(this.password);
            }). catch(error => 
                console.log(error))
        }
    }
}

</script>

<style scoped>
    body{
        font-style: normal;
        font-weight: normal;
    }

    .newpassword{
        background: #F7F7F7;
        border: 0px;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        padding:20px;
        position: absolute;
        align-items: center;
    }

    @font-face {
            font-family: Lato;
            src: url('../assets/Lato-Regular.ttf');
        }

    #user{
        margin-top: 10px;
        margin-bottom: 10px;
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

    .newpassword .new-password-form{
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

    .new-password-wrap{
        width: 340px;
        height:200px;
        position:relative;
        perspective:1000px;
        font-size: 16px;
        margin: 50px;
        margin-top: 20px;
        transform-style:preserve-3d;
    }

    .new-password-wrap .group .input{
        background-color: #FFFFFF;
        border: 0;
        font-size: 14px;
        border-bottom: 1px solid #8A8A8A;
        width: 100%;
    }

    .new-password-wrap .group .label{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #A9A9A9;
    }

    .new-password-wrap .group .button{
        background: #149B5F;
        color: white;
        font-size: 15px;
        border-radius: 45px;
        width: 100%;
        height: 60px;
        margin-top: 30px;
    }

</style>