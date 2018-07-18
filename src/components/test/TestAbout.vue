<template>
  <div >
    <h3 class="title py-4 mb-4 text-xs-center">{{pageTitle}}</h3>
    <p class="subheading text-xs-center">
      Здесь можно было бы написать инфо о компании, если бы это не было тестовое задание.
    </p>
    <img class="about-img" src="http://vk.com/images/stickers/46/256.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'test-about',
  data() {
    return {
      pageTitle: 'About component',
    };
  },
};
</script>

<style scoped>
.about-img {
  display: block;
  margin: 0 auto;
}
</style>
