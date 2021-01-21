const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Ciclo de vida de Vue'
    },
    beforeCreate() {
        console.log('BeforeCreate')
    },
    created() {
        // AL crear los metodos, observadodores y eventos, pero aun no accede al DOM
        // Aun no se puede acceder a 'el'
        console.log('created')
    },
    beforeMount() {
        //Se ejecuta antes de insertar el DOM
        console.log('beforeMount')
    },
    mounted() {
        //Se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('beforeUpdate')
    },
    updated() {
        // Al realizar los cambios
    },
    beforeDestroy() {
        //Antes de destruir la instancia
        console.log('beforeDistroy')
    },
    destroyed() {
        //Se destruye la instancia
        console.log('destroyed')

    },

    methods: {
        destruir(){
            this.$destroy();
        }
    },
});