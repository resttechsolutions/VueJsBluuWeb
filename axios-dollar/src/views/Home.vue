<template>
  <div>
    <v-card  elevation="5" class="my-5 py-2">
      <v-card-text class="display-1 text-center my-5 py-2">
        Currency Rates Dollar (USD) to Pesos (DOP)
      </v-card-text>
    </v-card>

    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card elevation="20">
          <v-date-picker
            v-model="fecha"
            full-width
            locale="en-us"
            :min="minimo"
            :max="maximo"
            @change="getDolar(fecha)"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            1.00 USD = $RD {{ valor }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      fecha: new Date().toISOString().substring(0, 10),
      minimo: "1984",
      maximo: new Date().toISOString().substring(0, 10),
      valor: null,
    };
  },
  methods: {
    ...mapMutations(["mostrarLoading", "ocultarLoading"]),

    async getDolar(dia) {
      // let datos = await axios.get(`https://mindicador.cl/api/dolar/${dia}`)

      try {
        this.mostrarLoading({
          titulo: "Accediendo a la informacion",
          color: "secondary",
        });
        let datos = await axios.get(
          `https://openexchangerates.org/api/historical/${dia}.json?app_id=c9d70a0f069b4b9fb428ff437376a41c&base=USD`
        );
        console.log(datos);

        if (datos.data.rates != null) {
          this.valor = await parseFloat(datos.data.rates.DOP).toFixed(2);
        } else {
          this.valor = "Sin resultados";
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.ocultarLoading();
      }

      // this.valor = await datos.data.serie[0].valor
    },
  },
  created() {
    this.getDolar(this.fecha);
  },
};
</script>
