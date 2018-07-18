<template>
  <div class="main-div">

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn slot="activator" color="primary" >Open Dialog</v-btn>
        <v-card style="">
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      appTitle: 'My awesome VueApp',
      dialog: false,
      items: [
        {
          title: 'Hello',
        },
        {
          title: 'World',
        },
      ],
    };
  },
};
</script>

<style scoped>
.my-toolbar {
  padding: 0 15px !important;
}

</style>
