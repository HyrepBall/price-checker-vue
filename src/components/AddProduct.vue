<template>
  <div >

    {{collectData}}

    <h3 class="title py-4">Добавить продукт</h3>

    <v-container class="pa-0" >
      <v-form>
        <v-flex >
          <v-layout row wrap>
            <v-flex lg6 class="pa-1">
              <v-text-field
                v-model="title"
                label="Название товара"
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex lg6 class="pa-1">
              <v-text-field
                v-model="price"
                label="Цена"
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex lg6 class="pa-1">
              <v-select
                :items="categoryList"
                v-model="category"
                label="Категория товара"
                solo
              ></v-select>
            </v-flex>
            <v-flex lg6 class="pa-1">
              <v-text-field
                v-model="shopLocation"
                label="Адрес магазина"
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex lg6 class="pa-1">
              <v-text-field
                v-model="shopName"
                label="Название магазина"
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-layout>
              <v-flex lg4 class="pa-1">
                <v-btn color="info" block large @click="pickUploadImage">
                  Загрузить фото
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
                <input
                  type="file"
                  style="display:none;"
                  ref="uploadImageInput"
                  accept="image/*"
                  @change="onImagePicked"
                  >
                <img :src="imageUrl" alt="" height="100" width="100">
              </v-flex>
              <v-flex lg4>
              </v-flex>
              <v-flex lg4 class="pa-1">
                <v-btn
                  color="success"
                  block
                  large
                  @click="addProduct"
                >
                  Добавить товар
                  <v-icon right dark>save</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import db, { storage } from '@/utils/firebase';

export default {
  name: 'add-product',
  data() {
    return {
      title: '',
      price: '',
      categoryList: [
        'Напитки', 'Выпечка', 'Фрукты / овощи',
      ],
      category: '',
      shopLocation: '',
      shopName: '',
      imageUrl: '',
      image: null,
    };
  },
  computed: {
    collectData() {
      return {
        title: this.title,
        price: this.price,
        category: this.category,
        shopLocation: this.shopLocation,
        shopName: this.shopName,
        image: this.image,
      };
    },
  },
  methods: {
    pickUploadImage() {
      this.$refs.uploadImageInput.click();
    },
    onImagePicked(event) {
      const files = event.target.files;
      const filename = files[0].name;

      if (filename.lastIndexOf('.') <= 0) {
        alert('Не верный формат файла');
      }

      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    addProduct() {
      console.log(db);
      console.log(storage);
    },
  },
};
</script>

<style scoped>

</style>
