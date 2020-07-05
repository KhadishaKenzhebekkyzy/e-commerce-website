<template>
    <div class="container" style="margin-bottom: 100px">
        <personal-area></personal-area>
        <div class="enterprise">
            <div class="horizontal">
                <h3>Предприятия</h3>
                <div id="group">
                <input id="search-enterprise" placeholder="Поиск предприятия">
                <button id="search-button" type="button"><i class="fa fa-search" aria-hidden="true" style="color: #128753; font-size: 17px"></i></button>
                <button type="button" class="btn btn-primary" id="add" style="margin: 0px; margin-left: 10px" onclick="window.location.href='/personalArea/myEnterprises/addEnterprise'">Добавить предприятие</button>
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

    .horizontal{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .enterprise{
        background-color: white;
        min-height: 710px;
        padding: 30px;
        border-radius: 0px 0px 5px 5px;
    }

    #add{
        width: 200px;
        height: 50px;
    }

    #search-enterprise{
        width: 300px;
        height: 50px;
        background: #F7F7F7;
        opacity: 0.8;
        border: 1px solid #149B5F;
        box-sizing: border-box;
        border-radius: 45px;
        padding: 20px;
        outline: none;
    }

    #search-enterprise:focus{
        box-shadow: 1px 1px 10px 1px #149b5e31;
    }

    #search-button{
        background: none;
        position: absolute;
        margin-left: 260px;
        margin-top: 12px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        outline: none;
    }

    #group{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    h3{
        font-size: 20px;
    }

</style>