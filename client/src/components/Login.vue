<template>
    <div class="registration">
        <div class="outer">
            <div class="login-wrap">
                <div class="login-html">
                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Войти в личный кабинет</label>
                        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab"><router-link to="/register">Регистрация</router-link></label>
                        <div class="login-form"> 
                            <div class="sign-in-htm">
                                <div class="group">
                                    <p id="p"><b>Авторизация</b></p>
                                    <br>
                                </div>
                                <div class="group">
                                    <label for="user" class="label">Номер телефона</label>
                                    <input id="user" type="tel" class="input" v-model="phoneNumber">
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Пароль</label>
                                    <input id="pass" type="password" class="input" data-type="password" v-model="password">
                                </div>
                                <div class="group">
                                    <div class="forget">
                                        <input type="submit" class="button" value="Войти" @click="login">
                                        <router-link to="/sendEmail">Забыли пароль?</router-link>
                                    </div>
                                </div>
                                <div class="group">
                                    <p>Дальнейший просмотр информации возможен только для зарегистрированных пользователей</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <img src="../assets/Astykbaga.png" alt="astykbaga">
                </div>
                <div class="welcome">
                    <h1><b>Добро пожаловать!</b></h1>
                    <br><br>
                    <p>Вас приветствует AstyqBaga – единственный в Казахстане ресурс,
                        <br>где можно продать выращенное зерно, масличные, бобовые,
                        <br>а также продукцию их переработки. Где можно купить весь спектр
                        <br>этих товаров у прямых поставщиков по объективным ценам. Это
                        <br> торговая площадка с постоянной модерацией в рабочие часы, и
                        <br> индексом цен реально заключенных контрактов.
                        <br><br> Это еще один удар по случайным на рынке компаниям, не
                        <br> имеющим активов, обязательств, а зачастую и совести. Это будет
                        <br> возможность предложить свой товар напрямую переработчикам
                        <br> и трейдерам, а, возможно, и самим импортерам.
                        <br> Участники Союза полеводов Казахстана используют все
                        <br> возможности AstyqBaga бесплатно.</p>
                    <br><br>
                    <a href="#more"><b>Узнать о Союзе</b></a>
                </div>
            </div>
    </div> 
</template>

<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
import axios from "axios"    
import {APIService} from '../../../routes/apiService';
const apiService = new APIService();
export default {
    data(){
        return{
            phoneNumber: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            console.log(this.phoneNumber);
            console.log(this.password);
            apiService.login({phoneNumber: this.phoneNumber, password: this.password}).then((response) => {
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
        line-height: 24px;
    }

    a{color:inherit;text-decoration:none}

    .info{
        width: 50%;
    }

    .registration{
        background: #F7F7F7;
        background-image: url('../assets/background.png') ;
        background-position: right;
        background-repeat: no-repeat;
        background-size: contain;
        padding-top: 100px;
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        overflow: scroll;
        justify-content: center;
    }

    @font-face {
            font-family: Lato;
            src: url('../assets/Lato-Regular.ttf');
        }

    .outer{
        margin: 0px auto;
        width: 1050px;
    }

    h1{
        font-size: 32px;
    }

    p{
        font-size: 16px;
    }

    img{
        width: 400px;
        height: auto;
    }

    .welcome a{
        font-size: 16px;
        color: #149B5F;
    }

    .login-wrap{
        width:450px;
        min-height: 575px;
        margin-left: 600px;
        margin-bottom: 100px;
        position: absolute;
        background:#FFFFFF;
        box-shadow: 0px 36px 44px rgba(0, 0, 0, 0.1);
        border-radius: 10px 10px 10px 10px;
    }

    .login-html .sign-in-htm{
        position:absolute;
        width: 100%;
        transform:rotateY(180deg);
        backface-visibility:hidden;
        transition: all .2s linear;
    }

    .login-html .sign-in,
    .login-html .sign-up{
        display:none;
    }

    .login-html .tab{
        font-size:16px;
        padding:37px;
        display:inline-block;
        background-color: #FBFBFB;
        border-bottom:2px solid transparent;
    }

    .login-html .sign-in:checked + .tab{
        color:#149B5F;
        background-color: #FFFFFF;
    }

    label{
        border-radius: 10px 10px 0px 0px;
    }

    .login-form{
        min-height:200px;
        position:relative;
        perspective:1000px;
        margin: 50px;
        transform-style:preserve-3d;
    }

    .login-form .group{
        margin-bottom: 15px;
        right: 0px;
    }

    .login-form .group .forget{
        display: inline-block;
        font-size: 15px;
    }

    .login-form .group .button{
        margin-top: 50px;
        color:#FFFF;
        display:block;
        font-size: 15px;
    }

    .login-form .group .label,
    .login-form .group .input{
        color: #000000;
        display: block;
        border: .2px;
        font-size: 14px;
    }

    input:focus {
        outline:none;
    }

    .login-form .group .input{
        background-color: #FFFFFF;
        border: 0;
        border-bottom: 1px solid #8A8A8A;
        width: 100%;
    }

    .login-form .group input[data-type="password"]{
        -webkit-text-security:circle;
    }

    .login-form .group .label{
        font-style: normal;
        margin-left: 0px;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #A9A9A9;
        text-align: start;
    }

    .login-form .group .button{
        background: #149B5F;
        border-radius: 45px;
        width: 180px;
        height: 60px;
        margin: 20px;
        margin-left: 0px;
        display: inline-block;
    }

    .login-form .group .existed{
        text-align: center;
        align-items: center;
    }

    .login-form .group .existed #text #existlink{
        color: #149B5F;
    }

    .login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
        transform:rotate(0);
    }


    .foot-lnk{
        text-align:center;
    }

</style>