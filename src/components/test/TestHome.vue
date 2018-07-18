<template>
  <div>
    <h3 class="title py-4 mb-4 text-xs-center">{{pageTitle}}</h3>

    <slick
      class="slick"
      ref="slick"
      :options="slickOptions"
    >
      <a v-for="i in 7"
        class="slick-item"
        :href="`http://vk.com/images/stickers/1${i}/128.png`"
        target="_blank"
        :key="i">
        <img class="slick-img" :src="`http://vk.com/images/stickers/1${i}/128.png`" alt="">
      </a>
    </slick>

    <v-container fluid>
      <v-layout justify-center row>
        <v-btn @click="prev" color="primary">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn @click="next" color="primary">
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import jQuery from 'jquery';


export default {
  name: 'test-home',
  data() {
    return {
      pageTitle: 'Home component',
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    };
  },
  components: {
    Slick,
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
};
</script>

<style scoped>
.slick-img {
  display: block;
  margin: 0 auto;
}
</style>
