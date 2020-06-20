<template>
    <div class="container">
        <personal-area></personal-area>
        <div class="announcements-active">
            <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 style="font-size: 20px; line-height: 28px;">Активные объявления</h3>
                        </div>
                        <div class="col-md-3">
                            <select class="select1">
                                <option>Все объявления</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-primary" id="add2" onclick="window.location.href='/personalArea/myAnnouncements/addAnnouncement'">Добавить объявление</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card" id="card-archieve">
                        <h3 style="font-size: 20px; line-height: 28px">Объявления в архиве</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                <h4>Продам</h4>
                <div class="card" id="form-announcement">
                    <div class="row">
                        <div class="col-md-7">
                        <p>Price</p>
                        <h3>Title</h3>
                        <p>Description</p>
                        </div>
                        <div class="col-md-4">
                            <p>Date</p>
                            <button type="button" class="btn btn-primary" id="add2"  onclick="window.location.href='/personalArea/myAnnouncementsActive/editAnnouncement'">Редактировать</button>
                        </div>
                    </div>
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

.announcements-active{
    background-color: white;
    margin: 0 auto;
    overflow: hidden;
    min-height: 710px;
    border-radius: 0px 0px 5px 5px;
    padding: 30px 0px 30px 30px;
}

#form-announcement{
    width: 100%;
    height: 120px;
    background: #FAFAFA;
    border-radius: 5px;
    border: 0px;
}

.select1{
    border: 0px;
    width: 100%;
    font-size: 14px;
    outline: 0px;
    background-color: white;
    margin-top: 8px;
}

h4{
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
}

#add2{
    width: 180px;
    height: 40px;
    font-size: 14px;
    margin: 0px;
    padding: 0px;
    position: relative;
}

#card-archieve{
    padding: 30px;
    padding-top: 0px;
    border: 0px;
    border-left: 1px solid #E1E8EE;
}

</style>