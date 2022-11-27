
<template>
  <section>
    <b-steps v-model="activeStep"
             :animated="isAnimated"
             :rounded="isRounded"
             :has-navigation="hasNavigation"
             :icon-prev="prevIcon"
             :icon-next="nextIcon"
             :label-position="labelPosition"
             :mobile-mode="mobileMode">
      <b-step-item step="1" :clickable="isStepsClickable">
        <h3 class="main__header">Начнём!</h3>
        <p class="main__question">Выберите пол</p>
        <div class="main__buttons">
          <label class="checkbox">
            <input id="gender-female" v-model="genderModel" class="checkbox__input" type="radio" name="gender"
                   value="женский"
                   @click="clickButtonNext"/>
            <span class="checkbox__icon">
                          <img src="../assets/image/gender-female.svg" alt="Женский"/>
                        </span>
            <p class="checkbox__label">Женский</p>
          </label>
          <label class="checkbox">
            <input id="gender-male" v-model="genderModel" class="checkbox__input" type="radio" name="gender"
                   value="мужской"
                   @click="clickButtonNext"/>
            <span class="checkbox__icon">
                          <img src="../assets/image/gender-male.svg" alt="Мужской"/>
                        </span>
            <p class="checkbox__label">Мужской</p>
          </label>
        </div>
      </b-step-item>
      <b-step-item step="2" :clickable="isStepsClickable">
        <div class="main__top">
          <h3 class="main__header">Белок</h3>
          <div class="header__steps">
            <span class="active-step">{{ activeStep + 1 }}</span>
            <span>/{{ totalItems }}</span>
          </div>
        </div>
        <p class="main__question">Едите ли вы мясо?</p>
        <div class="main__buttons">
          <label class="checkbox">
            <input id="option-meat" v-model="meatModel" class="checkbox__input" type="radio" name="meat" value="мясо"
                   @click="clickButtonNext"/>
            <span class="checkbox__icon">
                        <img src="../assets/image/eat-meat.svg" alt="Мясо"/>
                      </span>
            <p class="checkbox__label">Я ем мясо</p>
          </label>
          <label class="checkbox">
            <input id="option-vegan" v-model="meatModel" class="checkbox__input" type="radio" name="meat"
                   value="вегетарианец"
                   @click="clickButtonNext"/>
            <span class="checkbox__icon">
                        <img src="../assets/image/eat-vegan.svg" alt="Вегетарианец"/>
                      </span>
            <p class="checkbox__label">Я вегетарианец</p>
          </label>
        </div>
      </b-step-item>
      <b-step-item step="3" :clickable="isStepsClickable">
        <div class="main__top">
          <h3 class="main__header">Молочные продукты</h3>
          <div class="header__steps">
            <span class="active-step">{{ activeStep + 1 }}</span>
            <span>/{{ totalItems }}</span>
          </div>
        </div>
        <p class="main__question">Как вы относитесь к молочным продуктам?</p>
        <div class="main__buttons">
          <label class="checkbox">
            <input id="option-milk" v-model="milkModel" class="checkbox__input" type="radio" name="milk" value="молоко"
                   @click="clickButtonNext"/>
            <span class="checkbox__icon">
                        <img src="../assets/image/milk.svg" alt="Молоко"/>
                      </span>
            <p class="checkbox__label">Употребляю</p>
          </label>
          <label class="checkbox">
            <input id="option-no-milk" v-model="milkModel" class="checkbox__input" type="radio" name="milk"
                   value="без молока"
                   @click="clickButtonNext"/>
            <span class="checkbox__icon">
                        <img src="../assets/image/no-milk.svg" alt="Не молоко"/>
                      </span>
            <p class="checkbox__label">Не употребляю</p>
          </label>
        </div>
      </b-step-item>
      <b-step-item step="4" :clickable="isStepsClickable">
        <div class="main__top">
          <h3 class="main__header">Физическая активность</h3>
          <div class="header__steps">
            <span class="active-step">{{ activeStep + 1 }}</span>
            <span>/{{ totalItems }}</span>
          </div>
        </div>
        <p class="main__question">Каков ваш регулярный уровень физической активности?</p>
        <div class="main__fields">
          <label class="checkbox-fields">
            <input id="option-physical-1" v-model="physicalModel" class="checkbox__input" type="radio" name="physical"
                   value="1.2"
                   @click="clickButtonNext"/>
            <span class="checkbox__field">Почти полное отсутствие физической активности</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-physical-2" v-model="physicalModel" class="checkbox__input" type="radio" name="physical"
                   value="1.5"
                   @click="clickButtonNext"/>
            <span class="checkbox__field">Я часто хожу гулять</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-physical-3" v-model="physicalModel" class="checkbox__input" type="radio" name="physical"
                   value="1.5"
                   @click="clickButtonNext"/>
            <span class="checkbox__field">Я занимаюсь спортом 1 - 2 раза в неделю</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-physical-4" v-model="physicalModel" class="checkbox__input" type="radio" name="physical"
                   value="1.7"
                   @click="clickButtonNext"/>
            <span class="checkbox__field">Я занимаюсь спортом 3 - 5 раз в неделю</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-physical-5" v-model="physicalModel" class="checkbox__input" type="radio" name="physical"
                   value="1.9"
                   @click="clickButtonNext"/>
            <span class="checkbox__field">Я занимаюсь спортом 5 - 7 раз в неделю</span>
          </label>
        </div>
      </b-step-item>
      <b-step-item step="5" :clickable="isStepsClickable">
        <div class="main__top">
          <h3 class="main__header">Ваш типичный день</h3>
          <div class="header__steps">
            <span class="active-step">{{ activeStep + 1 }}</span>
            <span>/{{ totalItems }}</span>
          </div>
        </div>
        <p class="main__question">Опишите ваш типичный день</p>
        <div class="main__fields">
          <label class="checkbox-fields">
            <input id="option-daily-1" v-model="dailyModel" class="checkbox__input" type="radio" name="daily"
                   value="типичный день - 1" @click="clickButtonNext"/>
            <span class="checkbox__field">В офисе</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-daily-2" v-model="dailyModel" class="checkbox__input" type="radio" name="daily"
                   value="типичный день - 2" @click="clickButtonNext"/>
            <span class="checkbox__field">В офисе, но регулярно выхожу на улицу</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-daily-3" v-model="dailyModel" class="checkbox__input" type="radio" name="daily"
                   value="типичный день - 3" @click="clickButtonNext"/>
            <span class="checkbox__field">Большую часть дня я хожу пешком</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-daily-4" v-model="dailyModel" class="checkbox__input" type="radio" name="daily"
                   value="типичный день - 4" @click="clickButtonNext"/>
            <span class="checkbox__field">Ручной труд</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-daily-5" v-model="dailyModel" class="checkbox__input" type="radio" name="daily"
                   value="типичный день - 5" @click="clickButtonNext"/>
            <span class="checkbox__field">В основном я сижу дома</span>
          </label>
        </div>
      </b-step-item>
      <b-step-item step="6" :clickable="isStepsClickable">
        <div class="main__top">
          <h3 class="main__header">Параметры</h3>
          <div class="header__steps">
            <span class="active-step">{{ activeStep + 1 }}</span>
            <span>/{{ totalItems }}</span>
          </div>
        </div>
        <p class="main__question">Ваши данные</p>
        <div class="main__fields">
          <label class="wrapper-input">
            <input id="age" class="parameter-input" placeholder="Возраст" type="text" v-model="age"/>
          </label>
          <span v-if="msg.age" class="message">{{ msg.age }}</span>
          <label class="wrapper-input">
            <input id="height" class="parameter-input" type="text" placeholder="Рост" v-model="height"/>
          </label>
          <span v-if="msg.height" class="message">{{ msg.height }}</span>
          <label class="wrapper-input">
            <input id="weight" class="parameter-input" type="text" placeholder="Вес" v-model="weight" required/>
          </label>
          <span v-if="msg.weight" class="message">{{ msg.weight }}</span>
          <label class="wrapper-input">
            <input id="desiredWeight" class="parameter-input" type="text" placeholder="Желаемый вес"
                   v-model="desiredWeight" required/>
          </label>
          <span v-if="msg.desiredWeight" class="message">{{ msg.desiredWeight }}</span>
          <button :disabled="fieldsFill" class="button button-orange btn-form" @click="clickButtonNext">
            Дальше
          </button>
        </div>
      </b-step-item>
      <b-step-item step="7" :clickable="isStepsClickable">
        <div class="main__top">
          <h3 class="main__header">Бюджет</h3>
          <div class="header__steps">
            <span class="active-step">{{ activeStep + 1 }}</span>
            <span>/{{ totalItems }}</span>
          </div>
        </div>
        <p class="main__question">Ваш месячный бюджет на рацион (₽)</p>
        <div class="main__fields">
          <label class="checkbox-fields">
            <input id="option-budget-1" v-model="budgetModel" class="checkbox__input" type="radio" name="budget"
                   value="5000-7000" @click="clickButtonNext"/>
            <span class="checkbox__field">5000-7000</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-budget-2" v-model="budgetModel" class="checkbox__input" type="radio" name="budget"
                   value="7000-10000" @click="clickButtonNext"/>
            <span class="checkbox__field">7000-10000</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-budget-3" v-model="budgetModel" class="checkbox__input" type="radio" name="budget"
                   value="10000-15000" @click="clickButtonNext"/>
            <span class="checkbox__field">10000-15000</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-budget-4" v-model="budgetModel" class="checkbox__input" type="radio" name="budget"
                   value="15000-30000" @click="clickButtonNext"/>
            <span class="checkbox__field">15000-30000</span>
          </label>
          <label class="checkbox-fields">
            <input id="option-budget-5" v-model="budgetModel" class="checkbox__input" type="radio" name="budget"
                   value="30000+" @click="clickButtonNext"/>
            <span class="checkbox__field">30000+</span>
          </label>
        </div>
      </b-step-item>
            <b-step-item step="8" :clickable="isStepsClickable">
              <div class="main__top">
                <h3 class="main__header">Приготовление</h3>
                <div class="header__steps">
                  <span class="active-step">{{ activeStep + 1 }}</span>
                  <span>/{{ totalItems }}</span>
                </div>
              </div>
              <p class="main__question">Время на готовку</p>
              <div class="main__fields">
                <label class="checkbox-fields">
                  <input id="option-cooking-1" v-model="cookingModel" class="checkbox__input" type="radio" name="cooking" value="15-30 мин." @click="clickButtonNext"/>
                  <span class="checkbox__field">15-30 мин. в день</span>
                </label>
                <label class="checkbox-fields">
                  <input id="option-cooking-2" v-model="cookingModel" class="checkbox__input" type="radio" name="cooking" value="30-60 мин." @click="clickButtonNext"/>
                  <span class="checkbox__field">30-60 мин. в день</span>
                </label>
                <label class="checkbox-fields">
                  <input id="option-cooking-3" v-model="cookingModel" class="checkbox__input" type="radio" name="cooking" value="1-2 ч." @click="clickButtonNext"/>
                  <span class="checkbox__field">1-2 ч. в день</span>
                </label>
              </div>
            </b-step-item>
      <b-step-item step="9" :clickable="isStepsClickable">
        <div class="weight-grid">
          <div class="weight-grid__inner"></div>
          <div class="weight-grid__inner"></div>
          <div class="weight-grid__inner"></div>
          <div class="weight-grid__inner"></div>
          <div class="weight-grid__inner"></div>
          <div class="weight-grid__inner"></div>
          <span class="weight-grid__value">{{weight}} кг</span>
          <span class="weight-grid__title">Желаемый<br/>вес</span>
          <picture class="weight-grid__line">
            <source media="(max-width: 639px)" srcset="../assets/image/road-line-mobile.svg" alt="Линия">
            <img src="../assets/image/road-line.svg" alt="Линия"/>
          </picture>
        </div>
        <p class="main__question">Создание вашего плана</p>
        <h3 class="main__header" style="margin: 25px auto 0;max-width: 506px;">Хорошо питайтесь, развлекайтесь,<br/>выглядите потрясающе</h3>
        <div id="app">
          <div class="container">
            <div class="loading-bar">
              <div class="percentage" :style="{'width' : percentage + '%'}"></div>
              <span class="percent-value" :class="[percentage>50? 'white-color': '']">{{percent}}%</span>
            </div>
          </div>
        </div>
      </b-step-item>
      <b-step-item step="10" :clickable="isStepsClickable">
        <p class="main__question">Резюме вашего профиля</p>
        <div class="resume main">
          <div class="resume__wrapper">
            <h3 class="main__header" style="margin-bottom: 40px">Резюме вашего профиля</h3>
            <button class="button button-orange btn-form" style="width:100%; margin-bottom: 40px" >
              Получить прямо сейчас
            </button>
            <div class="content__wrap">
              <div class="content__item">
                <h3 class="content__title">Ваш ИМТ</h3>
                <picture class="content__img">
                  <span class="content__amount">{{ bmi.toFixed(2) }}</span>
                  <img src="../assets/image/icon-imt.svg" alt="График ИМТ"/>
                </picture>
                <p class="content__value">{{bmiText}}</p>
              </div>
              <div class="content__item">
                <h3 class="content__title">Метаболический возраст</h3>
                <div class="content__img">
                  <picture class="content__img" :class="{'--current-icon':metabolicAge<25}">
                    <img src="../assets/image/icon-age-young.svg" alt="Молодой" class="--default-icon"/>
                  </picture>
                  <picture class="content__img" :class="{'--current-icon':metabolicAge>25}">
                    <img src="../assets/image/icon-age-default.svg" alt="Средний" class="--default-icon"/>
                  </picture>
                  <picture class="content__img" :class="{'--current-icon':metabolicAge>45}">
                    <img src="../assets/image/icon-age-old.svg" alt="Взрослый" class="--default-icon"/>
                  </picture>
                </div>
                <p class="content__value">{{metabolicAge}}</p>
              </div>
              <div class="content__item">
                <h3 class="content__title">Рекомендуемое количество калорий</h3>
                <picture class="content__img">
                  <img src="../assets/image/icon-calories.svg" alt="Калькулятор калорий"/>
                </picture>
                <p class="content__value">{{ calcCalories(genderModel, age, weight, height, physicalModel) }}</p>
              </div>
              <div class="content__item">
                <h3 class="content__title">Рекомендуемое количество воды</h3>
                <picture class="content__img">
                  <img src="../assets/image/icon-water.svg" alt="Вода"/>
                </picture>
                <p class="content__value">{{ calcLiters(weight) }}</p>
              </div>
              <div class="content__item">
                <h3 class="content__title">Похудение в зонах</h3>
                <picture class="content__img">
                  <img src="../assets/image/icon-weight-loss.svg" alt="Зоны похудения"/>
                </picture>
              </div>
              <div class="content__item">
                <h3 class="content__title">Достижимый вес после 28 дней диеты</h3>
                <picture class="content__img">
                  <img src="../assets/image/icon-weight.svg" alt="Весы"/>
                </picture>
                <p class="content__value">{{calcWeight(weight, desiredWeight)}} кг</p>
              </div>
            </div>
          </div>
        </div>
      </b-step-item>
      <template
          v-if="customNavigation"
          #navigation="{previous, next}">
        <b-button
            id="back"
            @click.prevent="previous.action">
          Previous
        </b-button>
        <b-button
            id="next"
            @click.prevent="next.action">
          Next
        </b-button>
      </template>
    </b-steps>
    <b-button v-if="activeStep>0 && activeStep<8" class="main__bottom button-back" icon-left="arrow-left" @click="clickButtonBack">назад
    </b-button>
  </section>
</template>

<script>
export default {
  name: 'Quiz',
  data() {
    return {
      percentage: 0,
      genderModel: null,
      meatModel: null,
      milkModel: null,
      physicalModel: '',
      dailyModel: '',
      cookingModel: '',
      budgetModel: '',
      msg: [],
      age: null,
      isAge: false,
      metabolicAge: 0,
      bmi: 0,
      bmiText: '',
      weight: null,
      isWeight: false,
      desiredWeight: null,
      isDesiredWeight: false,
      height: null,
      isHeight: false,
      activeStep: 0,
      totalItems: 8,
      showSocial: false,
      isAnimated: false,
      isRounded: true,
      isStepsClickable: false,
      hasNavigation: false,
      customNavigation: true,
      isProfileSuccess: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      labelPosition: 'bottom',
      mobileMode: 'minimalist',
    };
  },
  computed: {
    fieldsFill() {
      return !(this.isAge && this.isHeight && this.isWeight && this.isDesiredWeight);
    },
    percent() {
      return this.percentage.toFixed();
    },
  },
  created() {

  },
  watch: {
    genderModel(value){
      localStorage.gender = value;
    },
    meatModel(value){
      localStorage.meat = value;
    },
    milkModel(value){
      localStorage.milk = value;
    },
    physicalModel(value){
      localStorage.physical = value;
    },
    age(value) {
      this.age = value;
      this.validateAge(value);
      localStorage.age = value;
    },
    height(value) {
      this.height = value;
      this.validateHeight(value);
      localStorage.height = value;
    },
    weight(value) {
      this.weight = value;
      this.validateWeight(value);
      localStorage.weight = value;
    },
    desiredWeight(value) {
      this.desiredWeight = value;
      this.validateDesiredWeight(value);
      localStorage.desiredWeight = value;
    },
    activeStep(value){
      const headerText = document.getElementById('header-text');
      const header = document.getElementById('header');
      if(value===0){
        header.classList.remove("header-clear");
        headerText.classList.remove("header-text-clear");
        headerText.classList.add("header-text-block");
      } else if (value===8) {
        header.classList.add("header-clear");
        const num = setInterval(() => {
          if(this.percentage < 100) {
            this.percentage += .2;
          }
          else {
            this.activeStep+=1;
            clearInterval(num);
          }
        }, .5);
        this.calcMetabolicAge(this.age);
        this.calcBMI(this.height, this.weight);
      } else {
        header.classList.remove("header-clear");
        headerText.classList.add("header-text-clear");
        headerText.classList.remove("header-text-block");
      }
    }
  },
  methods: {
    clickButtonNext() {
      return document.getElementById('next').click();
    },
    clickButtonBack() {
      return document.getElementById('back').click();
    },
    calcBMI(height, weight){
      const heightM = height*0.01;
      this.bmi = weight/(heightM*heightM).toFixed(2);
      if(this.bmi<18){
        this.bmiText = 'Дефицит массы тела';
      } else if(this.bmi<25){
        this.bmiText = 'Нормально';
      } else if(this.bmi<30){
        this.bmiText = 'Избыточная масса тела';
      } else if(this.bmi<35){
        this.bmiText = 'Ожирение 1-й степени';
      } else if(this.bmi<40){
        this.bmiText = 'Ожирение 2-й степени';
      } else if(this.bmi>40){
        this.bmiText = 'Ожирение 3-й степени';
      }
      return this.bmi;
    },
    calcLiters(weight){
      if(weight<50){
        return "2 литра";
      } else if (weight<60) {
        return "3 литра";
      } else if (weight<70) {
        return "3.5 литра";
      } else if (weight<90) {
        return "4 литра";
      } else if (weight>90) {
        return "5 литров";
      }
    },
    calcCalories(genderModel, age, weight, height, physical){
      let calories = 0;
      if(genderModel === "женский"){
        calories = (9.99*weight + 6.25*height - 4.92*age - 161) * physical;
      } else {
        calories = (9.99*weight + 6.25*height - 4.92*age + 5) * physical;
      }
      if(calories<1200){
        return "1100-1300";
      } else if (calories<1400){
        return "1200-1600";
      } else if (calories<1600){
        return "1400-1800";
      } else if (calories<1800){
        return "1600-2000";
      } else if (calories<2000){
        return "1800-2200";
      } else if (calories<2200){
        return "2000-2400";
      } else if (calories<2400){
        return "2200-2600";
      } else if (calories<2600){
        return "2400-2800";
      } else if (calories<2800){
        return "2600-3000";
      } else if (calories<3000){
        return "2800-3200";
      } else if (calories<3200){
        return "3000-3400";
      } else if (calories<3400){
        return "3200-3600";
      } else if (calories<3600){
        return "3400-3800";
      } else if (calories<3800){
        return "3600-4000";
      }
    },
    calcWeight(weight, desiredWeight){
      if((weight-desiredWeight)<4){
        return desiredWeight;
      } else {
        return weight-4;
      }
    },
    calcMetabolicAge(age){
      const a = Number(age);
      this.metabolicAge = a + 5;
      return this.metabolicAge;
    },
    validateAge(value) {
      this.isAge = false;
      if (value === "") {
        this.msg.age = '';
        this.isAge = false;
      } else if (!/^\d+$/.test(value)) {
        this.msg.age = 'Поле должно содержать только цифры.';
        this.isAge = false;
      } else if (value < 12) {
        this.msg.age = 'Возраст должен быть от 12 лет.';
        this.isAge = false;
      } else if (value > 90) {
        this.msg.age = 'Возраст должен быть до 90 лет.';
        this.isAge = false;
      } else {
        this.msg.age = '';
        this.isAge = true;
      }
    },
    validateHeight(value) {
      this.isHeight = false;
      if (value === "") {
        this.msg.height = '';
      } else if (!/^\d+$/.test(value)) {
        this.msg.height = 'Поле должно содержать только цифры.';
      } else if (value < 120) {
        this.msg.height = 'Рост должен быть от 120 см.';
      } else if (value > 220) {
        this.msg.height = 'Возраст должен быть до 220 см.';
      } else {
        this.msg.height = '';
        this.isHeight = true;
      }
    },
    validateWeight(value) {
      this.isWeight = false;
      if (value === "") {
        this.msg.weight = '';
      } else if (!/^\d+$/.test(value)) {
        this.msg.weight = 'Поле должно содержать только цифры.';
      } else if (value < 40) {
        this.msg.weight = 'Вес должен быть от 40 кг.';
      } else if (value > 150) {
        this.msg.weight = 'Возраст должен быть до 150 кг.';
      } else {
        this.msg.weight = '';
        this.isWeight = true;
      }
    },
    validateDesiredWeight(value) {
      this.isDesiredWeight = false;
      if (value === "") {
        this.msg.desiredWeight = '';
      } else if (!/^\d+$/.test(value)) {
        this.msg.desiredWeight = 'Поле должно содержать только цифры.';
      } else if (value < 40) {
        this.msg.desiredWeight = 'Вес должен быть от 40 кг.';
      } else if (value > 150) {
        this.msg.desiredWeight = 'Возраст должен быть до 150 кг.';
      } else {
        this.msg.desiredWeight = '';
        this.isDesiredWeight = true;
      }
    },
  },

};
</script>

<style lang="scss">
#next, #back {
  display: none;
}

.white-color {
  color:white !important;
}

.loading-bar {
  border: 1px solid #FF4500;
  border-radius: 50px;
  display: block;
  height: 60px;
  margin: 30px auto 0;
  max-width: 600px;
  overflow: hidden;
  position: relative;

  .percentage {
    background: linear-gradient(.686turn,#FF4500,#FF713c);
    border-radius: 50px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: width .05s ease-in-out;
    width: 0;
  }

  .percent-value{
    color: #FF4500;
    font-size: 32px;
    font-weight: 500;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
}

@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}


.weight-grid {
  margin: 0 auto 65px;
  max-width: 600px;
  position: relative;
  width: 100%;
}

.weight-grid__inner {
  background-color: #FF4500;
  border-radius: 5px;
  display: block;
  height: 1px;
  width: 100%;
}
.weight-grid__inner+.weight-grid__inner {
  margin-top: 40px;
}

.weight-grid__value {
  background: #ff7700;
  border-radius: 55px;
  bottom: -14px;
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: 500;
  left: 24px;
  min-width: 84px;
  padding: 10.5px 20px;
  position: absolute;
  text-align: center;
  width: -moz-fit-content;
  width: fit-content;
  z-index: 2;
}

.weight-grid__title {
  background: linear-gradient(.686turn,#f54300,#f04100);
  border-radius: 55px;
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: 500;
  min-width: 146px;
  padding: 5.5px 24px;
  position: absolute;
  right: 130px;
  text-align: center;
  top: 0;
  width: -moz-fit-content;
  width: fit-content;
  z-index: 2;
}

.weight-grid__line {
  bottom: 16px;
  left: 93.5px;
  position: absolute;
  z-index: 1;
}

@media screen and (max-width: 639px) {
  .weight-grid__value {
    left: calc(50% - 100px);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .weight-grid__line {
    bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .weight-grid__title {
    right: calc(50% - 80px);
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
  }
}

.resume{
  padding: 10px 0;
}

.resume__wrapper{
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.content__wrap{
  display: flex;
  flex-wrap: wrap;
}

.content__item{
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 45px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 190px;
  overflow: hidden;
  padding: 15px 20px;
}

@media screen and (min-width: 640px) {
  .content__item {
    width: 48%;
  }

  .content__item:nth-child(2n) {
    margin-left: 4%;
  }

  .content__item:nth-child(n+3) {
    margin-top: 20px;
  }
}

@media screen and (max-width: 640px) {
  .content__item {
    width: 100%;
  }

  .content__item+.content__item {
    margin-top: 20px;
  }

  .content__title {
    text-align: center;
  }
}

.content__title{
  color: #4e4e4e;
  display: block;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.content__value{
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #FF4500;
}

.content__img{
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.content__img{
  img{
    margin: 0 auto;
    max-width: 100%;
    vertical-align: middle;
  }
}

.content__amount{
  color: #FF4500;
  font-size: 40px;
  font-weight: 400;
  left: 0;
  position: absolute;
  top: -14px;
}

.--current-icon img{
  opacity: 1;
}

.--default-icon{
  opacity: .2;
}

.message {
  font-size: 16px;
  padding: 5px 0;
  margin-bottom: 0px !important;
  color: #ff0000;
}

.main__bottom {
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin: 15px auto;
  padding: 0;
}

.button-back {
  align-items: center;
  color: #4e4e4e;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  opacity: .55;
  transition: opacity .25s, color .25s;
  width: fit-content;
}

.button-back:hover {
  color: #FF4500;
  font-weight: bold;
}

.b-steps .steps + .step-content {
  padding: 0;
}

.steps {
  display: none;
}

.main__top {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 10px;
  max-width: 600px;
  padding: 0 45px;
  position: relative;
  width: 100%;
}

.main__header {
  text-align: center;
  font-size: 22px;
}

.header__steps {
  font-size: 22px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
}

.active-step {
  color: #FF4500;
}

.main__question {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #FF4500;
}

.main__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}

.checkbox {
  cursor: pointer;
  display: block;
  margin: 0 15px;

  &:hover {
    .checkbox__icon {
      border: 1px solid white;
      background-color: #ffffff;
    }

    .checkbox__label {
      font-weight: bold;
      color: #FF4500;
      opacity: 1;
    }
  }
}

.checkbox__input {
  display: none;
}

.checkbox__icon {
  align-items: center;
  border: 1px solid #FF4500;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 250px;
  max-width: 250px;
  min-width: 250px;
  padding: 20px;
  transition: all .2s linear;
  width: 100%;
}

.checkbox__icon img {
  display: block;
  object-fit: contain;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox__label {
  text-align: center;
  font-size: 18px;
  color: #4e4e4e;
  display: block;
  opacity: .5;
  margin-top: 10px;
}

.main__fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}

.checkbox-fields {
  cursor: pointer;
  display: block;
  margin: 10px 0;
  max-width: 600px;
  width: 100%;

  .checkbox__field {
    background: #fff;
    border: 1px solid #FF4500;
    border-radius: 24px;
    color: #4e4e4e;
    display: block;
    font-size: 18px;
    font-weight: 400;
    padding: 10px 20px;
    text-align: center;
    transition: all .15s linear;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      background: #FF4500;
      color: #fff;
    }
  }
}

.wrapper-input {
  display: block;
  margin: 10px 0;
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

@media screen and (max-width: 620px) {
  .checkbox__icon {
    height: 150px;
    max-width: 150px;
    min-width: 150px;
  }

  .checkbox__icon img {
    height: 100%;
    width: 100%;
  }

  .checkbox-fields {
    .checkbox__field {
      font-size: 12px;
      font-weight: 500;
      padding: 14px 6px;
    }
  }

  .parameter-input {
    padding: 14px 6px;
  }
}

.btn-form {
  margin: 10px 0 0 0;
}

@media screen and (max-width: 380px) {
  .checkbox {
    margin: 0 5px;
  }

  .checkbox__icon {
    height: 130px;
    max-width: 130px;
    min-width: 130px;
  }

  .message {
    font-size: 14px;
  }
}
</style>
