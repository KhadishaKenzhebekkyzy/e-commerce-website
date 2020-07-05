<template>
    <div class="container" id="myAnnouncements-container">
        <personal-area></personal-area>
        <div class="announcements">
            <div class="group">
                <img src="../../assets/myAnnouncements.svg" style="width: 15%">
                <p id="empty">Здесь могут быть ваши объявления,<br>
                но сначала нужно ...</p>
                <div class="btn-center">
                    <button type="button" class="btn btn-primary" id="add" onclick="window.location.href='/personalArea/myAnnouncements/addAnnouncement'">Добавить объявление</button>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import PersonalArea from './PersonalArea'
export default {
    components:{
        'personal-area': PersonalArea
    }
}
</script>

<style>
    .announcements{
        background-color: white;
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        min-height: 700px;
        border-radius: 0px 0px 5px 5px;
        display: flex;
    }

    .group{
        text-align: center;
        margin: 0;
        position: absolute;
        top: 45%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .btn-center{
        text-align: center;
        margin: 0;
        position: absolute;
        left: 50%;
        margin-top: 30px;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    #add{
        width: 200px;
        height: 50px;
        font-size: 14px;
    }

    #empty{
        color: #A9A9A9;
        font-size: 20px;
        margin: 30px;
    }

    #myAnnouncements-container{
        margin-bottom: 100px;
        margin-top: 100px;
    }

    
</style>