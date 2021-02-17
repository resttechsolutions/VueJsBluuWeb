<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn>Texto</v-btn>
        <v-btn color="primary">Texto</v-btn>
        <v-btn color="blue">Texto</v-btn>

        <v-btn color="secondary" text>Sin Fondo</v-btn>
        <v-btn color="info" text x-small>X-Small</v-btn>
        <v-btn color="warning" text small>Small</v-btn>
        <v-btn color="blue" text medium>Medium</v-btn>
        <v-btn color="success" text large>Large</v-btn>
        <v-btn color="error" text x-large>Extra Large</v-btn>
        <v-btn color="warning" text x-large :disabled="true">Disabled</v-btn>

        <v-btn color="info" depressed>Depressed</v-btn>

        <v-btn text>
          <v-icon>forum</v-icon>
        </v-btn>
        <v-btn color="primary" icon text>
          <v-icon>event_seat</v-icon>
        </v-btn>

        <v-btn color="info" icon text fab>
          <v-icon>eco</v-icon>
        </v-btn>
        <v-btn color="info" icon text fab small>
          <v-icon>games</v-icon>
        </v-btn>
        <v-btn color="info" icon text fab large dark>
          <v-icon>hearing</v-icon>
        </v-btn>

        <v-btn color="success">
          Eco
          <v-icon>eco</v-icon>
        </v-btn>
        <v-btn color="info">
          Eco
          <v-icon class="ml-2">eco</v-icon>
        </v-btn>
        <v-btn color="error">
          Eco
          <v-icon right>eco</v-icon>
        </v-btn>
        <v-btn color="primary">
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>
        <v-btn outlined color="indigo">
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>
        <v-btn outlined color="success" rounded block>
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
</style>