<template>
  <section class='section is-medium'>
    <div class='container'>
      <div class='columns is-vcentered'>
        <div class='column has-text-centered'>
          <h1 class='title'>404</h1>
          <p class='subtitle'>Страница не найдена</p>
          <b-button class='is-default' @click='$router.push(`/`)'>На главную</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '404',
};
</script>