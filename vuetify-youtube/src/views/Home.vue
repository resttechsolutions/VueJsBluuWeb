<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              natus vitae nisi exercitationem ducimus minima molestias
              perspiciatis eius eligendi velit sequi commodi, voluptates
              doloremque itaque neque odio quam sint facere!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" text>Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              natus vitae nisi exercitationem ducimus minima molestias
              perspiciatis eius eligendi velit sequi commodi, voluptates
              doloremque itaque neque odio quam sint facere!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" text @click="dialog=true">Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title>Este es el Titulo</v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos laudantium, dolorem repellat voluptas nisi fugiat ipsum
            quo odit praesentium sit, id consequatur deleniti dolore deserunt
            perferendis quasi! Id, quisquam vitae?
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog=false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
  <!-- <v-container>
    <v-layout wrap>
      <v-flex class="primary text-center" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary text-center" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="error text-center" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>

    <v-layout secondary mt-5 justify-center align-center style="height:300px">
      <v-flex class="info text-center" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="pink lighten-1 white--text text-center" xs3>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>


    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-5 mt-5">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4 text-">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
