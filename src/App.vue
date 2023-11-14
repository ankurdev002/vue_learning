<template>
  <h1>main compoenent</h1>
  <h1>mounted data {{ name }}</h1>
  <button v-on:click="counter=counter+1">Update Count</button>
  <h4 ref="count">{{ counter }}</h4>
  <button @click="tab='Java'">Load Java</button>
  <button @click="tab='JS'">Load JS</button>
  <button @click="tab='Node'">Load Node</button>
  <button @click="tab='React'">Load React</button>
  <!-- <Java/>
  <JS/>
  <Node/>
  <React/> -->
  <MountUnmount v-if="show"/>
  <button v-on:click="show=!show">Mount/Unmount</button>
  <component :is="tab"/>

  <teleport to="#footer">
   <Footer/>
   <h1>this is main teleport html</h1>
  </teleport>
  <div class="desginclass">

    <router-link to="/page">pageone</router-link>
    <router-link to="/pagetwo">pageTwo</router-link>
    <router-view></router-view>
  </div>
<!-- <SlotsParent/> -->

  <!-- <Compute/> -->
  <!-- <NonProp data="some data" id="user-cmp"/> -->
  <!-- <Form /> -->
<!-- <HelloWorld msg="Hello there are u ok with vue yes i'm" data="props similar in vue"/> -->
<!-- <Home dataforce="homepage component props value"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue';

import JS from './components/DynamicComponents/JS.vue';
import Java from './components/DynamicComponents/Java.vue';
import Node from './components/DynamicComponents/Node.vue';
import React from './components/DynamicComponents/React.vue';
import MountUnmount from './components/MountUnmount/MountUnmount.vue';
import Footer from './components/TeleportComponents/Footer.vue';

// import SlotsParent from './components/SlotsParent.vue';

// import Compute from './components/Compute.vue';


// import NonProp from './components/NonProp.vue';

// import Form from './components/Form.vue';

export default {
    name: 'App',
    components: {
    Java,
    JS,
    Node,
    React,
    Footer,
    MountUnmount
},
// life cycle examples
beforeCreate(){
  alert('JS component before created')
},
created(){
alert('JS component created')
},
beforeMount(){
  console.log('before mount',this.$el)
alert('template before mount check console for more understanding')
},
mounted(){
  console.log('after mount',this.$el)
alert('templated is mounted/created check console for more details')
},
data(){
  alert('JS component data execution one')
  return{
    tab:'Java',
    name:'Ankur',
    counter:0,
    show:true
  }
},beforeUnmount(){
  console.log('before Unmount')
},unmounted(){
  console.log('unmount successfully')
},
beforeUpdate(){
  console.log('counter value',this.$refs['count'].textContent)
  alert('beforeUpdate check console')
},updated(){
  console.log('counter value  updated',this.$refs['count'].textContent)
  alert('updated')
},
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
    font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
}
.desginclass{
  height: 100px;
  width: 100%;
}
</style>
