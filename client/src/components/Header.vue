<template>
  <div id="header" class="header">
    <div class="header__img">
      <router-link to="/"><img src="../assets/image/logotype.png" alt="Логотип" width="90" height="90"/></router-link>
    </div>
    <div id="header-text" class="header__text" >
      <p>Пройди наш тест и узнай, какой способ похудения поможет тебе избавиться от пары лишних килограммов.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>

<style>
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding: 20px 15px 40px 15px;
    position: relative;
    margin: 0 auto;
  }

  .header:not(.header-clear):before{
    background-color: #FF4500;
    border-radius: 5px;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 600px;
  }

  @media only screen and (max-width: 760px) {
    .header::before {
      width: calc(100% - 20px);
    }
  }

  .header__img{
    padding: 5px 0;
  }

  .header__text{
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    max-width: 900px;
    padding-top: 20px;
  }

  @media only screen and (max-width: 1005px) {
    .header {
      padding: 0 10px;
    }

    .header__text{
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 300px) {
    .header__text{
      padding: 0 5%;
    }
  }

</style>
