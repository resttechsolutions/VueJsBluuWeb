Vue.component('hijo',{
    template: //html
    `
    <div class="bg-success p-5 text-white">
        <h4>Componente Hijo {{numero}}</h4>
    </div>
    `,
    props: ['numero']
    // data(){
    //     return
    // }
})