<template>
  <div class="main">
    <div class="container">
      <div class="main__box">
        <h3 class="main__header">Управление подписками</h3>
        <p class="main__title">Где я нахожусь в данный момент?</p>
        <p class="main__help">Это страница по управлению подписками, а также мы ответим на самые распространенные
          вопросы</p>
        <div class="block__border"></div>
        <div class="main__body">
          <div class="body__block">
            <p class="block__title">Почему без моего согласия была совершена оплата?</p>
            <p class="block__description">На сайте Вы оформили пробную подписку, которая продлевается автоматически на
              несколько дней или неделю с помощью рекуррентного платежа, с которым вы согласились при оплате.</p>
          </div>
          <div class="block__border"></div>
          <div class="body__block">
            <p class="block__title">Почему без моего согласия была совершена оплата?</p>
            <p class="block__description">Мы используем рекуррентные платежи, также известные как рекарринговые платежи
              или «автоплатежи» — это возможность выполнять регулярные списания денег с банковской карты покупателя или
              электронного кошелька без повторного ввода реквизитов карты и без участия плательщика для инициации
              очередного платежа.</p>
            <p class="block__description">Рекуррентные платежи используют так же такие компании как Яндекс, Google,
              Amazon, IVI, Netflix и многие другие.</p>
          </div>
          <div class="block__border"></div>
          <div class="body__form">
            <p class="form__title">Карта</p>
            <div class="form__fields">
              <label class="wrapper-input">
                <span class="input__help">Первые 6 цифр</span>
                <input id="cardSix" v-model="cardSix" class="parameter-input" placeholder="123456" type="text"
                       maxlength="6" oninput="this.value = this.value.replace(/[^0-9]/g, '')"/>
              </label>
              <label class="wrapper-input" >
                <span class="input__help">Последние 4 цифры</span>
                <input id="cardFour" v-model="cardFour" class="parameter-input" placeholder="1234" type="text"
                       maxlength="4" oninput="this.value = this.value.replace(/[^0-9]/g, '')"/>
              </label>
            </div>
            <div class="form__info">
              <div class="info__block">
                <img src="../assets/image/lock.svg" alt="Lock" style="width:14px;height:14px;padding-top: 3px;"/>
                <span>Все данные передаются по зашифрованному каналу с использованием протокола TLS. Использование данной
                  страницы абсолютно безопасно.</span></div>
              <div class="info__block">
                <img src="../assets/image/lock.svg" alt="Lock" style="width:14px;height:14px;padding-top: 3px;"/>
                <span>Указывается только часть данных, это безопасно</span>
              </div>
            </div>
            <button :disabled="fieldsFill" class="button button-orange btn-form">
              Отписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardSix: "",
      cardFour: "",
    };
  },
  computed: {
    fieldsFill() {
      return !(this.cardSix && this.cardFour && this.cardSix.length === 6 && this.cardFour.length === 4);
    },
  },
};
</script>

<style lang="scss">
.main__box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper-input:first-child{
  margin-right: 1rem;
}

.parameter-input {
  display: block;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border: 1px solid #FF4500;
  border-radius: 24px;
  font-size: 18px;
  padding: 10px 20px;
  text-align: center;
  transition: all .15s linear;
  width: 100%;
}

.main__header {
  margin: 10px 0;
}

.main__title {
  color: #FF4500;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
}

.main__help {
  max-width: 600px;
  text-align: center;
  margin: 15px auto;
  font-size: 16px;
}

.main__body {
  max-width: 600px;
  width: 100%;
}

.body__block {
  margin: 20px 0;
}

.block__title {
  color: #4e4e4e;
  font-size: 18px;
  font-weight: 500;
}

.block__description {
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin: 20px auto 0;
  max-width: 600px;
  width: 100%;
}

.body__form {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  height: 30rem;

  .btn-form {
    width: 100%;
    margin: 10px 0;
  }
}

.form__title {
  margin: 15px 0 5px 0;
  color: #4e4e4e;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
}

.form__fields {
  display: flex;
  justify-content: space-between;
}

.input__help {
  color: #9d9d9d;
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
}

.info__block {
  color: #4e4e4e;
  font-size: 12px;
  margin: 10px 20px;
}

@media screen and (max-width: 620px) {
  .parameter-input {
    padding: 14px 6px;
  }
  .wrapper-input:first-child{
    margin: 0 !important;
  }
}

@media screen and (max-width: 450px) {
  .form__fields {
    flex-direction: column;
  }

  .info__block {
    margin: 10px 0;
  }

}

</style>