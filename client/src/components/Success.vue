<template>
    <div class="success" style="clear:both">
        <div class="info">
                <img src="../assets/Astykbaga.png" alt="astykbaga">
        </div>
        <div class="outer">
            <div class="success-form" style="clear:both">
                <div class="head">
                    <p><b>Восстановение пароля</b></p>
                </div>
                <div class="success-wrap">
                    <img id="success" src="../assets/succes.png" alt="success">
                    <p>Спасибо! Мы отправили
                        <br> Вам на почту форму для
                        <br> восстановления пароля
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        }
    }
}

</script>

<style scoped>
    body{
        font-style: normal;
        font-weight: normal;
    }

    .success{
        background: #F7F7F7;
        border: 0px;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        padding:20px;
        position: absolute;
        align-items: center;
        @font-face {
            font-family: Lato;
            src: url('../assets/Lato-Regular.ttf');
        }
    }

    #success{
        width: 60px;
        height: auto;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .success-wrap{
        align-self: center;
        text-align: center;
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

    .success .success-form{
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

    .success-wrap{
        width: 340px;
        height:200px;
        position:relative;
        perspective:1000px;
        font-size: 16px;
        margin: 50px;
        margin-top: 20px;
        transform-style:preserve-3d;
    }

</style>