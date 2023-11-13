<!-- rendering of list and performing event on button click -->
<template>
<h1>Child Component</h1>
<h2>{{ name }}</h2>
<h3>{{ user.name }}<br/>{{ user.email }}</h3>
<ul>
    <li v-for="item in userdata" :key="item">{{ item }}</li>
</ul>
<button v-on:click="getData()">Call parent function</button>
</template>
<script>
export default {
    name: 'ChildComp',
    props: {
        name: String,
        user: Object,
        getData:Function,
    }, data() {
        return {
            userdata:['heklk','james','saron']
        }
    }
    
}
</script>