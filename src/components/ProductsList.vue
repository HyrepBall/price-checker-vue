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
      <template v-for="(item, i) in products">
        <v-list-tile
          :key="item.key"
          avatar
          class="px-3 product-tile"
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
            <v-btn @click="removeProduct(item['.key'])" icon ripple>
              <v-icon color="grey lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>

    <v-snackbar
      v-model="snackbar"
      color="blue-grey darken-4"
      right
      bottom
      :timeout="1000"
    >
      {{snackbarMsg}}
    </v-snackbar>
  </div>
</template>

<script>
import db, { storage } from '@/utils/firebase';

export default {
  name: 'products-list',
  data() {
    return {
      products: [],
      snackbar: false,
      snackbarMsg: '',
    };
  },
  firestore() {
    return {
      products: db.collection('products'),
    };
  },
  mounted() {
    console.log(db);
  },
  methods: {
    removeProduct(uid) {
      db.collection('products').doc(uid).delete()
        .then(() => {
          this.snackbarMsg = 'Удалено';
          this.snackbar = true;
        });
    },
  },
};
</script>

<style scoped>
.product-tile {
  border-bottom: 2px solid #ccc;
}
</style>
