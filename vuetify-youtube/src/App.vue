<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        Veutify
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn class="success">
        Ingreso
      </v-btn>
      <v-btn class="error">
        Salir
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3">Rafael Estrella</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      drawer : true
    }
  },
};
</script>
