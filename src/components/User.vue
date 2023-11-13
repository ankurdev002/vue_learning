<!-- conditonal rendering of table -->
<template>
    <div class="data-container" v-if="showTable">
        <h1>{{data.name}}</h1>
        <h1>{{data.email}}</h1>
        <button v-on:click="getNameAlert(data.name)">Alert Name</button>
    </div>
</template>
<script>
export default {
    name: 'UserInfo',
    props: {
        data: Object
        , getNameAlert: Function
        ,showTable:Boolean
    },
  
}
</script>
<style scoped>
h1{
    color: seagreen;
}
.data-container{
    background: lightblue;
    margin: 5px 20px;
    border-bottom: 1px solid black;
}
</style>