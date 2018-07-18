<template>
  <div >

    <h3 class="title py-4">
      Продукты
    </h3>

    <v-progress-circular
      v-if="products.length === 0"
      indeterminate
      color="primary"
      :size="40"
    ></v-progress-circular>

    <v-list three-line v-else>
      <template v-for="(item) in products">
        <v-list-tile
          :key="item.title"
          avatar
          class="px-3"
        >
          <v-list-tile-avatar size="60" class="mr-5 mt-1">
            <img :src="item.imageUrl">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title" class="mb-1"></v-list-tile-title>
            <v-list-tile-sub-title>Цена: {{item.price}} руб.</v-list-tile-sub-title>
            <v-list-tile-sub-title>
              Адрес: "{{item.shopName}}",
               {{item.shopLocation}}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">edit</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import db from '@/utils/firebase';

export default {
  name: 'products-list',
  data() {
    return {
      products: [],
    };
  },
  firestore() {
    return {
      products: db.collection('products'),
    };
  },
};
</script>

<style scoped>

</style>
