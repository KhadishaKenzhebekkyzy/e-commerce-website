<template>
  <div class="container" id="information-container">
    <personal-area></personal-area>
    <div class="personal">
      <div class="row">
        <div class="col-md-8" style="padding-top: 30px">
      <h3 class="title">Основная информация</h3>
      <div class="row">
        <div class="col-sm-6">
          <label for="surname" class="label">Фамилия*</label>
          <input id="surname" type="text" class="input" v-model="surname">
          <label for="name" class="label">Имя*</label>
          <input id="name" type="text" class="input" v-model="name">
          <label for="patronym" class="label">Отчество*</label>
          <input id="patronym" type="text" class="input" v-model="patronym">
        </div>

        <div class="col-sm-6">
          <label for="ID" class="label">ID союза полеводов</label>
          <input id="ID" type="num" class="input" v-model="ID">
          <label for="phone" class="label">Номер телефона*</label>
          <input id="phone" type="tel" class="input" v-model="phone">
        </div>

      </div>

      <h3 class="title">Конфиденциальность</h3>
      <div class="row">
        <div class="col-sm-6">
          <label for="email" class="label">E-mail*</label>
          <input id="email" type="email" class="input" v-model="email">
          <label for="town" class="label">Город/Поселок*</label>
          <input id="town" type="text" class="input" v-model="town">
        </div>

        <div class="col-sm-6">
          <label for="phone2" class="label">Телефон организации*</label>
          <input id="phone2" type="tel" class="input" v-model="phone2">
          <label for="street" class="label">Улица</label>
          <input id="street" type="text" class="input" v-model="street">
        </div>
      </div>

      <div class="row">
        <button type="button" class="btn btn-primary">Сохранить</button>
        <a id="cancel">Отменить изменения</a>
      </div>

    </div>
      
<div class="col-md-4">
    <div class="account">
        <div class="card" id="card1">
          <img src="../../assets/Image.png">
          <div class="overlap">
            <button id="profile-form">
              <img id="profile" src="../../assets/farmer.png">
            </button>
          </div>
          <div class="overlap">
            <button id="edit" type="button">
              <i style="color: black" class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div class="group2" style="margin-top: 30px; position: relative">
            <p style="margin-top: 80px; font-size: 20px"><b>Имя Фамилия</b></p>
            <p>Информация</p>
            <button style="border-radius: 5px; height: 28px">Подписка активна</button>
          </div>
        </div>
        <div class="card" id="card2">
          <h3>Безопасность</h3><br>
          <label for="oldPassword" class="label">Старый пароль</label>
          <input id="oldPassword" type="password" class="input" v-model="oldPassword">
          <label for="newPassword" class="label">Новый пароль</label>
          <input id="newPassword" type="password" class="input" v-model="newPassword">
          <label for="repeatedPassword" class="label">Повторите пароль</label>
          <input id="repeatedPassword" type="password" class="input" v-model="repeatedPassword">
        </div>
      </div>
      </div>
</div>
</div>

    <div class="card" id="card3">
      <div class="row">
        <div class="col-sm-1">
          <svg class="bi bi-info-circle" width="4em" height="4em" viewBox="0 0 16 16" fill="#6D6D6D"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
            <circle cx="8" cy="4.5" r="1" />
          </svg>
        </div>
        <div class="col-sm-10">
          <p id="inf">Все ваши данные защищены. Используются только к объявлениям, без дополнительных требовании по
            личной информации.
            Ваша история сохраняется в личном кабинете, и помогает в быстром поиске информации</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonalArea from './PersonalArea'
  export default {
    components: {
      'personal-area': PersonalArea
    }
  }
</script>

<style>

#information-container {
  margin-bottom: 100px;
  align-items: center;
  margin-top: 100px;
}

.account {
  float: right;
}

img {
  width: 100%;
}

#card2 {
  padding: 30px;
  border-right: 0px;
  border-bottom: 0px;
  border-top: 0px;
  border-radius: 0px;
}

.overlap {
  position: fixed;
}

#card1 {
  border-right: 0px;
  border-top: 0px;
  text-align: center;
  align-items: center;
  padding-bottom: 30px;
  border-radius: 0px;
}

#card3 {
  border: 0px;
  background: rgba(61, 201, 83, 0.05);
  border-radius: 0px 0px 5px 5px;
  padding: 30px;
  text-align: left;
  border-radius: 0px 0px 5px 5px;
}

#inf {
  margin-top: 20px;
}

#edit {
  background-color: #E1E8EE;
  width: 24px;
  height: 24px;
  margin-top: 175px;
}

#profile {
  width: 70%;
}

#profile-form {
  width: 130px;
  height: 130px;
  border-radius: 90px;
  background-color: grey;
  margin-top: 60px;
}

h3 {
  font-size: 20px;
}

.row {
  margin-bottom: 20px;
}

.personal {
  background-color: white;
  min-height: 200px;
  position: relative;
  padding: 0px 0px 30px 30px;
  perspective: 1000px;
  transform-style: preserve-3d;
  padding-bottom: 50px;
}

@font-face {
  font-family: Lato;
  src: url('../../assets/Lato-Regular.ttf');
}

.title {
  font-size: 20px;
  margin-bottom: 30px;
}

.label {
  font-size: 12px;
  line-height: 20px;
  color: #A9A9A9;
  text-align: start;
}

.button {
  background: #149B5F;
  border-radius: 45px;
  width: 212px;
  height: 60px;
  margin: 20px;
  margin-top: 10px;
  color: #FFFF;
  display: block;
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
  border-bottom: 1px solid #4072D4;
}

.input {
  border-bottom: 1px solid #8A8A8A;
  outline: none;
  margin-bottom: 20px;
  width: 100%;
}

#cancel {
  margin: 29px;
  font-size: 14px;
}

</style>