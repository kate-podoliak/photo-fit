<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__border"></div>
      <section style="width: 100%">
        <b-collapse
            v-model="isOpen"
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide">
          <template #trigger>
            <div
                :class="{hide: show}"
                role="button"
                aria-controls="contentIdForA11y2"
                :aria-expanded="isOpen">
              <p class="footer__show" :class="{ hide: show }" @click="show = !show">О сервисе</p>
            </div>
          </template>
            <div class="footer__content">
              <div class="footer__payment">
                <p style="font-weight: bold;">zdorovo.io © 2022</p>
                <p style="color: #4e4e4e; opacity: .5;">Все права защищены</p>
                <div class="payments">
                  <div class="payment"><img src="../assets/image/icon-visa.png" alt="Visa"/></div>
                  <div class="payment"><img src="../assets/image/icon-mastercard.png" alt="Mastercard"/></div>
                  <div class="payment"><img src="../assets/image/icon-apple.png" alt="Apple Pay"/></div>
                  <div class="payment"><img src="../assets/image/icon-google.png" alt="Google Pay"/></div>
                </div>
              </div>
              <ul class="footer__menu">
                <li><router-link to="/unsubscribe">Отменить подписку</router-link></li>
                <li><a href="./pdf/privacy-policy.pdf">Политика обработки персональных данных</a></li>
                <li><a href="./pdf/terms.pdf">Пользовательское соглашение</a></li>
                <li><a href="./pdf/tarifes.pdf">Тарифы</a></li>
              </ul>
              <div class="footer__info">
                <p><noindex>ИП Кокарев Д.А.</noindex></p>
                <p><noindex>ИНН: 370255076376</noindex></p>
                <p><noindex>ОГРНИП: 321370200014024</noindex></p>
                <p><a href='mailto:support@zdorovo.io' style="font-weight: bold;">support@zdorovo.io </a>- поддержка</p>
                <p><a href='mailto:ceo@zdorovo.io' style="font-weight: bold;">ceo@zdorovo.io </a>- сотрудничество</p>
              </div>
            </div>
        </b-collapse>
      </section>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      show: false,
      isOpen: false
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.footer {
  bottom: 0;
  transition: all .25s;
  padding: 0;
  background: linear-gradient(280.48deg,#ffece6 7.8%,#fff 97.57%);
  width: 100%;
  position: fixed;
}

.footer__wrapper {
  padding: 10px 15px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}

.footer__border {
  border-bottom: 1px solid #FF4500;
  height: 5px;
  width: 100%;
}

.footer__show {
  color: #4e4e4e;
  opacity: .5;
  padding: 10px 15px;
}

.footer__show:hover {
  cursor: pointer;
  opacity: 1;
}

.hide {
  background-image: url(../assets/image/icon-close.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: 16px;
  background-size: 12px;
  display: inline-block;
}

.collapse .collapse-trigger {
  display: block !important;
  text-align: center !important;
}

.panel {
   -webkit-box-shadow: none;
   box-shadow: none;
}

.footer__content {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  transition: all .5s;
  font-size: 14px;
  will-change: height,padding;
}

.footer__info p {
  padding: 2px 0;
}

.footer__menu li {
  padding: 2px 0;
}

.footer__payment {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.payments {
  display: flex;
  padding: 15px 0;
  width: 70%;
}

.payment {
  margin-right: 5px;
}

.payment img {
  width: 100%;
}

@media only screen and (max-width: 1005px) {
  .footer__wrapper {
    padding: 0 10px;
  }
}

@media screen and (max-width: 767px) {
  .footer__content {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  .payments {
    padding: 10px 0;
    align-self: center;
  }

  .payments img{
    width: 70%;
    height: auto;
  }

  .footer__info, .footer__menu{
    padding: 0 0 15px 0;
  }

  .footer__payment {
    align-items: normal;
    width: 100%;
  }
}
</style>
