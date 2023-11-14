<template>
    <h1>from route page one</h1>
    <h3>Profile is : {{ profile }}</h3>
    <button><router-link to="/page/data">home</router-link></button>
</template>

<script>
import { useRoute } from 'vue-router';
export default{
    name:'PageOne',
    mounted(){
        const route = useRoute()
        this.profile=route.params.name
        console.log(route)
    },data(){
        return{
            profile:''
        }
    }
}
</script>
<style scoped>
h1{
font-size: 32px;
text-transform: uppercase;
background: lightseagreen;
height: 80px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
button{
    position: absolute;
    top: 0;
}
h3{
    position: absolute;
    right: 0;
    top: 0;
}
</style>