<template>
  <div v-if='!alreadyAccepted' :class='isMobile ? `cookies-container-mobile` : `cookies-container is-max-desktop`' style="width: 100%">
    <div v-if="!isMobile" class='accept-cookies columns' style="display: flex; margin: 0">
      <p class='column is-four-fifths has-text-centered'>Мы используем файлы cookie, чтобы вам было удобнее пользоваться нашим сайтом. Нажимая принять вы принимаете
        нашу <a style='text-decoration: underline; color: #ff4500' @click='openCookies'>политику cookies</a></p>
      <div class='column'>
        <b-button type='is-danger' style="background: linear-gradient(116.15deg,#FF9269,#FF4500); color: white !important;" @click='acceptCookies'>Принять</b-button>
      </div>
    </div>
    <div v-if="isMobile" class='accept-cookies' style="display: block">
      <p class='has-text-centered'>Мы используем файлы cookie, чтобы вам было удобнее пользоваться нашим сайтом. Нажимая принять вы принимаете
        нашу <a style='text-decoration: underline; color: #ff4500' @click='openCookies'>политику cookies</a></p>
      <div>
        <b-button class="button-cookies" type='is-danger' style="background: linear-gradient(116.15deg,#FF9269,#FF4500) !important; color: white !important;" @click='acceptCookies'>Принять</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcceptCookies',
  data() {
    return {
      alreadyAccepted: true,
    };
  },
  computed: {
    isMobile() {
      return process.browser ? window.screen.width <= 768 : false;
    },
  },
  mounted() {
    this.alreadyAccepted = localStorage.getItem('acceptedCookies') === 'true';
  },
  methods: {
    acceptCookies() {
      this.alreadyAccepted = true;
      localStorage.setItem('acceptedCookies', 'true');
    },
    openCookies() {
      this.$router.push(`/tos`);
    },
  },
};
</script>

<style scoped>
.cookies-container-mobile {
  position: fixed;
  z-index: 9;
  bottom: 0;
}

.cookies-container {
  position: absolute;
  z-index: 9;
  bottom: 0;
}

.button-cookies{
  width: 100%;
  height: 30px;
}

.accept-cookies {
  width: 100%;
  color: black;
  background-color: #e8ecf1;
  padding: 10px;
  justify-content: space-between;
  /*display: flex;*/
  align-items: center;
}

@media all and (max-width: 768px) {
  .cookies-container {
    padding: 0 5px;
  }
}
</style>