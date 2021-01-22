Vue.component('padre', {
    template: //html
        `
    <div class="bg-dark p-5 text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return {
            numeroPadre: 0
        }
    }
})