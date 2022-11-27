<template>
  <div class='height-100 real-height'>
    <div class='wrapper has-background-default is-family-default is-font-color-default'>
      <Header/>
      <Nuxt />
      <Footer/>
      <AcceptCookies />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import AcceptCookies from '../components/AcceptCookies';
import '../assets/css/main.css';

export default {
  components: { AcceptCookies, Footer, Header, },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped></style>
