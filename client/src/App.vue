<template>
  <div id="app">
    <div v-if="show" class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/" style="margin: 0px">
          <img class="logo" src="./assets/Astykbaga.png" />
          <button style="padding-bottom: 5px">
            Категории
            <svg class="bi bi-list" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Главная
                <!-- <span class="sr-only">(current)</span> -->
              </a>
            </li>
            <li class="nav-item">
              <a id="fav" class="nav-link" data-toggle="tab" href="/">Избранное</a>
            </li>
            <li class="nav-item">
              <a id="sell" class="nav-link" data-toggle="tab" href="/">Продам</a>
            </li>
            <li class="nav-item">
              <a id="buy" class="nav-link" data-toggle="tab" href="/">Куплю</a>
            </li>
            <li class="nav-item" style="margin-right: 20px">
              <form action="">
                <input id="search-on-header" type="search">
                <i class="fa fa-search" id="search-icon" aria-hidden="true" style="color: #149B5F"></i>
              </form>
            </li>
            <li class="nav-item">
              <button type="submit" id="person" onclick="window.location.href='/personalArea/information'">
                <i class="fa fa-user" aria-hidden="true" style="color: white"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <router-view></router-view>

    <div v-if="show" class="container" style="margin-bottom: 0px">
      <footer class="site-footer">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <img class="logo" id="lo" src="./assets/Astykbaga.png" />
            <p class="text-justify">
              Cервис поиска объявлений
              <br />сельхозпродукции по
              <br />Республике Казахстан
            </p>
          </div>

          <div class="col-xs-6 col-md-4">
            <h3>Контакты</h3>
            <img src />
            <p>
              <i class="fa fa-envelope" aria-hidden="true" style="color: #149B5F; margin-right: 10px"></i>Электронная
              почта: info@astyqbaga.kz
            </p>
            <p>
              <i class="fa fa-phone" aria-hidden="true" style="color: #149B5F; margin-right: 10px"></i>Контактный
              телефон +7 777 897 8137
            </p>
          </div>

          <div class="col-xs-6 col-md-5">
            <h3>Присоединяйтесь к нам</h3>
            <div class="row">
            <ul class="social-icons">
              <li>
                <a class="vk" href="#">
                  <i class="fa fa-vk"  style="font-size:20px"></i>
                </a>
              </li>
              <li>
                <a class="telegram" href="#">
                  <img src="./assets/telegramIcon.svg" style="width: 50%; margin-bottom: 5px; margin-right: 3px">
                </a>
              </li>
              <li>
                <a class="instagram" href="#">
                  <i class="fa fa-instagram" aria-hidden="true" style="font-size:20px"></i>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-6">
            <p class="copyright-text">© 2019. All rights reserved.</p>
          </div>

          <div class="col-md-8 col-sm-6 col-xs-10" id="footer-bottom" style="padding-right: 0px">
            <a>О компании</a>
            <a>Политика конфиденциальности</a>
            <a>Помощь</a>
            <a>Оплата онлайн</a>
            <a>Тарифы</a>
          </div>

          <div class="col-md-1 col-sm-3 col-xs-6" style="padding-left: 0px; padding-right: 0px">
            <i class="fa fa-cc-visa" aria-hidden="true" style="font-size: 30px"></i>
            <i class="fa fa-cc-mastercard" aria-hidden="true" style="font-size: 30px"></i>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>



<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
  export default {
    name: "App",
    data: function () {
      return {
        count: 0
      };
    },
    computed: {
      show() {
        return (
          this.$route.name !== "login"
        );
      }
    }
  };
</script>

<style>
.navbar {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 15px;
  padding-bottom: 15px;
  overflow: auto;
}

button {
  background: #149b5f;
  border-radius: 45px;
  width: 150px;
  height: 40px;
  display: inline-block;
  color: #ffff;
  font-size: 15px;
  border: 0px;
}

.btn.btn-primary{
  background: #149B5F;
  border-radius: 45px;
  width: 212px;
  height: 60px;
  margin: 20px;
  margin-top: 10px;
  color: #FFFF;
  display: block;
  font-size: 14px;
  border: 0px;
}

.btn-primary:hover{
    background-color: #14CA79 !important;
    border-color: #14CA79 !important;
}

.btn-primary:active,
.btn-primary:focus{
    box-shadow: 2px 2px 10px 2px #14ca7880 !important;
    background-color: #14CA79 !important;
    border-color: #14CA79 !important;
}

h3 {
  font-weight: bold;
  font-size: 20px;
}

@font-face {
  font-family: Lato;
  src: url("./assets/Lato-Regular.ttf") format("woff");
}

::placeholder{
  color: black;
  font-size: 14px;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  background-color: #f8f8f8;
}

form{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 45px;
    height: 45px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 0px;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.048);
}

#search-on-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 45px;
    line-height: 45px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

#search-icon{
    box-sizing: border-box;
    padding: 14px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:hover{
    width: 200px;
    cursor: pointer;
}

form:hover #search-on-header{
    display: block;
}

form:hover #search-icon{
    background: #ffffff;
    color: white;
}

.logo {
  width: 35%;
  margin-bottom: 10px;
  margin-right: 20px;
}

#person {
  color: #149b5f;
  width: 45px;
  height: 45px;
  border: 5px solid white;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.048);
  outline: none;
}

#person:hover,
#person:active,
#person:focus{
  box-shadow: 2px 2px 10px 2px #00000021 !important;
}

.nav-item {
  margin-right: 50px;
  font-size: 14px;
}

.nav-item:hover{
  font-weight: bold;
  background-color: #f8f8f8;
}

.nav-item:active,
.nav-item:focus{
  font-weight: bold;
  background-color: #f8f8f8;
}

#fav {
  color: black;
}

.bi {
  margin-top: 10px;
}

#buy {
  color: #149b5f;
}

#sell {
  color: #e61e50;
}

.site-footer {
  padding: 45px 0 20px;
  font-size: 14px;
  line-height: 24px;
}

.site-footer hr {
  opacity: 0.1;
  border: 1px solid #000000;
}

.site-footer hr.small {
  margin: 20px 0;
}

.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
}

#footer-bottom a {
  margin-right: 15px;
}

@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  width: 100%;
  margin-top: 10px;
  margin-left: 5px;
}

.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
  margin-top: 10px;
  margin-right: 10px;
}

.social-icons a {
  background-color: #eceeef;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.social-icons a.vk {
  background-color: #5a7b9d;
  color: white;
}

.social-icons a.telegram {
  background-color: #039be5;
}

.social-icons a.instagram {
  background-color: #e61e50;
  color: white;
}

#lo {
  width: 60%;
}
</style>

