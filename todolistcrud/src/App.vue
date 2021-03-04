<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn class="success mx-2" text>ingreso</v-btn>
      <v-btn class="error" text>salir</v-btn>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="10"
    >
      <v-container style="height: 1500px"></v-container>
    </v-sheet>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="" />
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">Juanito Perez</p>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex mx-3>
          <v-btn color="success" class="mb-3" block :to="{ name: 'home' }"
            >Home</v-btn
          >
          <v-btn color="success" block :to="{ name: 'tareas-crud' }"
            >Lista de Tareas</v-btn
          >
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      drawer: true,
    };
  },
};
</script>
