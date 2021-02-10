<template>
    <div>
        <h1>Photo Gallery:</h1>
        <router-link :to="{name: 'Photos', params: {id: pothoArray}}" 
        v-for="(pothoArray, index) of photosArray" :key="index">

            <button>Photo {{pothoArray}} </button>
        </router-link>
        <Photography/>

        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>

<script>

import Photography from '@/components/Photography.vue'

export default {
    name: 'Photos',
    components:{
        Photography
    },
    data(){
        return {
            photosArray: [1,2,3]
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        }
    },
    anterior(){
        this.$router.go(-1)
    },
    siguenete(){
        this.$router(1)
    }
}
</script>