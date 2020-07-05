<template>
<div class="container" style="padding: 0px">
    <div class="personal-area">
        <div class="horizontal">
            <h1><b>Личный кабинет</b></h1>
            <a href="/login"><i class="fa fa-sign-out" aria-hidden="true" style="margin-right: 10px"></i>Выйти</a>
        </div>
        <br>
        <br>

        <div class="form">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <router-link to="/personalArea/information" tag="li" active-class="active"><a class="nav-item nav-link" id="nav-information-tab" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true">Информация</a></router-link>
                    <router-link to="/personalArea/myAnnouncements" tag="li" active-class="active"><a class="nav-item nav-link" id="nav-my-announcements-tab" data-toggle="tab" role="tab" aria-controls="nav-profile" aria-selected="false">Мои объявления</a></router-link>
                    <router-link to="/personalArea/myEnterprises" tag="li" active-class="active"><a class="nav-item nav-link" id="nav-my-enterprises-tab" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false">Мои предприятия</a></router-link>
                    <router-link to="/personalArea/mySubscriptions" tag="li" active-class="active"><a class="nav-item nav-link" id="nav-my-subscriptions-tab" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false">Мои подписки</a></router-link>
                </div>
            </nav>
        </div>
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
import Information from './Information'
export default {
    components:
    {
        'information': Information
    }
}
</script>

<style scoped>
    h1{
        font-size: 30px;
    }

    .personal-area{
        margin-top:100px;
    }

    .horizontal{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #nav-tab{
        border: 0px;
    }

    #nav-information-tab,
    #nav-my-announcements-tab,
    #nav-my-enterprises-tab,
    #nav-my-subscriptions-tab{
        min-width: 200px;
        height: 87px;
        text-align: center;
        font-size: 20px;
        margin-right: 0px;
        vertical-align: middle;
        font-weight: bold;
        padding: 30px;
    }

    .nav-item:hover{
        color: #149B5F;
        background-color: rgba(255, 255, 255, 0.397);
        border: 0px;
    }

    a{
        color: black;
        font-size: 14px;
    }

    .nav-tabs .nav-item.show .nav-link, 
    .nav-tabs .nav-link.active {
        border: 0px;
    }

</style>