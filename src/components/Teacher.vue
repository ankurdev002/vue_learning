<!-- sending value to prop from child to parent -->

<template>
    <h1>Teacher Component Child Component</h1>
    <h3>Teacher name is :{{ name }}</h3>
    <button v-on:click="getChildProp(childProp)">Send Data To Parent</button>
</template>

<script>
export default {
    name: 'TeacherComponent',
    props: {
        name: String,
        getChildProp:Function
    },
    data() {
        return {
         childProp:'testing for sendind data to parent'
        }
    },
}
</script>