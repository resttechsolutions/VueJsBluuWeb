Vue.component('hijo',{

    template: //html
    `
    <div class="bg-success py-5 my-3 text-white p-2">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}} </h4>
        <button class="btn btn-warning text-white" @click="numero++">+</button>
    </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombre: 'Rafael'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
    },
})