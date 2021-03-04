<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
          
        <v-card class="mb-3" v-for="(tarea, index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              {{ tarea.titulo }}
            </v-chip>

            <p>
              {{ tarea.descripcion }}
            </p>
            <v-btn color="warning" text class="ml-0" @click="editar(index)">Editar</v-btn>
            <v-btn color="error" text @click="eliminarTarea(tarea.id)">eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field
              label="Titulo de la tarea"
              v-model="titulo"
            ></v-text-field>
            <v-textarea
              label="Descriocion de la tarea"
              v-model="descripcion"
            ></v-textarea>
            <v-btn color="success" block type="submit" text>Agregar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field
              label="Titulo de la tarea"
              v-model="titulo"
            ></v-text-field>
            <v-textarea
              label="Descriocion de la tarea"
              v-model="descripcion"
            ></v-textarea>
            <v-btn color="warning" block type="submit" text>Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar">
      <span color="info">
          {{ mensaje }}
      </span>

      <template v-slot:action="{ attrs }">
        <v-btn color="info" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Titulo tarea #1",
          descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              aliquid placeat minus eos explicabo doloremque a, quia vitae iure
              fugit! Eveniet fugit libero vero expedita, quidem labore voluptas
              alias dolorum.`,
        },
        {
          id: 2,
          titulo: "Titulo tarea #2",
          descripcion: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              aliquid placeat minus eos explicabo doloremque a, quia vitae iure
              fugit! Eveniet fugit libero vero expedita, quidem labore voluptas
              alias dolorum.`,
        },
      ],
      titulo: "",
      descripcion: "",
      snackbar: true,
      mensaje: "",
      formAgregar: true,
      indexTarea: ''
    };
  },
  methods: {
    agregarTarea() {
      if (this.titulo === "" || this.descripcion === "") {
        this.snackbar = true;
        this.mensaje = "Llena todos los campos!";
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion,
        });

        this.titulo = ""
        this.descripcion = ""
        this.snackbar = true
        this.mensaje = "Tarea Agregada"
      }
    },
    eliminarTarea(id){
        this.listaTareas = this.listaTareas.filter(e => e.id != id)
        this.snackbar = true
        this.mensaje = "Eliminaste la tarea"
    },
    editar(index){
        this.formAgregar = false
        this.titulo = this.listaTareas[index].titulo
        this.descripcion = this.listaTareas[index].descripcion
        this.indexTarea = index
    },
    editarTarea(){
        this.listaTareas[this.indexTarea].titulo = this.titulo
        this.listaTareas[this.indexTarea].descripcion = this.descripcion
        this.formAgregar = true
        this.titulo = ''
        this.descripcion = ''
        this.snackbar = true
        this.mensaje = "Editaste la tarea"
    }
  },
};
</script>
<style>
</style>