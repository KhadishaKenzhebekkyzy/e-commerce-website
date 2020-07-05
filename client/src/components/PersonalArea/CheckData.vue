<template>
    <div class="container" style="margin-top: 100px;margin-bottom: 100px">
        <h1><i class="fa fa-long-arrow-left" aria-hidden="true" style="font-size: 20px; margin-right: 10px; color: #149B5F"
        onclick="window.location.href='/personalArea/myAnnouncements/addAnnouncement'"></i>Проверка данных</h1>
        <div class="checkData">
            <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="code" class="label">Код-подтверждение*</label>
                            <input id="code" type="text" class="input" v-model="code" placeholder="4-значный код">
                            <p>
                                На ваш e****@ma***.ru придет 4 значный код <br>
                                потверждения публикации объявления
                            </p>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-primary" onclick="window.location.href='/personalArea/myAnnouncementsActive'" style="height: 60px">Отправить</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3" style="padding-left: 50px">
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Основные данные 
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Параметры 
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Цена 
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Фотографии
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Элеватор 
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Населенный пункт
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Вид деятельности 
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Описание
                    </label>
                    <label for="generalData" class="add-announcement-checkbox-label">
                    <input class="add-announcement-checkbox" type="checkbox" value="generalData" id="generalData">Контактные данные 
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.checkData{
    margin-top: 50px;
  background-color: white;
  padding: 50px;
  border-radius: 0px 0px 5px 5px;
}

h3 {
  font-size: 20px;
  margin-bottom: 30px;
}

h1{
    font-size: 32px;
    font-weight: bold;
}

.label{
  font-size: 12px;
  line-height: 20px;
  color: #A9A9A9;
  text-align: start;
}

p{
    color: #8D8D92;
    font-size: 12px;
line-height: 24px;
}

.add-announcement-checkbox{
    margin-right: 10px;
}

.add-announcement-checkbox-label{
    font-size: 14px;
}

label,
.input {
  color: #000000;
  display: block;
  border: .2px;
  font-size: 14px;
}

.input:focus {
  border-bottom: 1px solid #149B5F;
}

.input {
  border-bottom: 1px solid #8A8A8A;
  outline: none;
  margin-bottom: 20px;
  width: 100%;
}

</style>