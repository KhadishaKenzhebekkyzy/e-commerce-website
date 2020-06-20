<template>
    <div class="registration">
        <div class="outer">
            <div class="login-wrap">
                <div class="login-html">
                        <router-link to="/login"><input id="tab-1" type="radio" name="tab" class="sign-in"><label for="tab-1" class="tab"><b>Войти в личный кабинет</b></label></router-link>
                        <input id="tab-2" type="radio" name="tab" class="sign-up" checked><label for="tab-2" class="tab"><b>Регистрация</b></label>
                        <div class="login-form"> 
                            <div class="sign-up-htm">
                                <div class="group">
                                    <p id="p">Регистрация</p>
                                </div>
                                <div class="group">
                                    <label for="user" class="label">Номер телефона</label>
                                    <input id="phone" type="tel" class="input" v-model="phoneNumber">
                                </div>
                                <div class="group">
                                    <label for="user" class="label">Почта</label>
                                    <input id="user" type="email" class="input" v-model="email">
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Пароль</label>
                                    <input id="pass" type="password" class="input" data-type="password" v-model="password">
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Повторите пароль</label>
                                    <input id="pass2" type="password" class="input" data-type="password" v-model="confirmPassword">
                                </div>
                                <div class="group">
                                    <div class="existed">
                                        <input type="submit" class="button2" value="Зарегистрироваться" @click="register">
                                        <label for="tab-1" id="text">Есть аккаунт? <a id="existlink">Войдите</a></label>
                                    </div>
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
            email: '',
            password: '',
            phoneNumber: '',
            confirmPassword: '',
            error: ''
        }
    },
    methods: {
        register(){
            if (this.password!=this.confirmPassword){
                alert("Those passwords didn't match")
            }
            else{
                apiService.register({email: this.email, password: this.password, phoneNumber: this.phoneNumber}).then((response) => {
                    
                    console.log(this.email);
                    console.log(this.password);
                }). catch(error => 
                    console.log(error))
            }
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
    
    #phone,
    #user, 
    #pass, 
    #pass2{
        margin-bottom: 20px;
    }

    h1{
        font-size: 32px;
    }

    p{
        font-size: 16px;
        margin-bottom: 30px;
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
        min-height: 685px;
        margin-left: 600px;
        margin-bottom: 100px;
        position: absolute;
        background:#FFFFFF;
        box-shadow: 0px 36px 44px rgba(0, 0, 0, 0.1);
        border-radius: 10px 10px 10px 10px;
    }

    .login-html .sign-up-htm{
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

    label{
        border-radius: 10px 10px 0px 0px;
    }

    .login-html .tab{
        font-size:16px;
        padding:38px;
        display:inline-block;
        background-color: #FBFBFB;
        border-bottom:2px solid transparent;
    }

    .login-html .sign-up:checked + .tab{
        color:#149B5F;
        background-color: #FFFFFF;
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

    .login-form .group .existed .button2{
        margin-top: 50px;
        color:#FFFF;
        display:block;
        font-size: 15px;
    }

    .login-form .group .label,
    .login-form .group .input{
        color: #000000;
        display: block;
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
        line-height: 20px;
        color: #A9A9A9;
        text-align: start;
    }

    .login-form .group .existed .button2{
        background: #149B5F;
        display:inline-block;
        margin:0 auto;
        border-radius: 45px;
        height: 60px;
        width: 100%;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .login-form .group .existed{
        text-align: center;
        align-items: center;
    }

    .login-form .group .existed #text #existlink{
        color: #149B5F;
    }


    .login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
        transform:rotate(0);
    } 

    .foot-lnk{
        text-align:center;
    }

</style>