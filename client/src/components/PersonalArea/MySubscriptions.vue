<template>
    <div class="container" style="margin-bottom: 100px">
        <personal-area></personal-area>
        <div class="subscriptions">
            <div class="row">
                <div class="col-md-8">
                    <h3>Архив транзакции</h3>
                </div>
                <div class="col-md-4">
                    <h3>Подписки</h3>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-2">
                            <h4>Номера заказа</h4>
                        </div>
                        <div class="col-md-2">
                            <h4>Дата заказа</h4>
                        </div>
                        <div class="col-md-4">
                            <h4>Наименование</h4>
                        </div>
                        <div class="col-md-2">
                            <h4>Сумма</h4>
                        </div>
                        <div class="col-md-2">
                            <h4>Статус</h4>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="col-md-4">
                    <div class="card">

                    </div>
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

    .subscriptions{
        background-color: white;
        min-height: 710px;
        padding: 30px 0px 0px 30px;
        border-radius: 0px 0px 5px 5px;
    }

h4{
    font-weight: bold;
    font-size: 10px;
    line-height: 42px;
    display: flex;
    color: #979797;
}

h3{
    font-size: 20px;
}

</style>