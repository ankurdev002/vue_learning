<template>
  <h1>main compoenent</h1>
<SlotsParent/>

  <!-- <Compute/> -->
  <!-- <NonProp data="some data" id="user-cmp"/> -->
  <!-- <Form /> -->
<!-- <HelloWorld msg="Hello there are u ok with vue yes i'm" data="props similar in vue"/> -->
<!-- <Home dataforce="homepage component props value"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue';

import SlotsParent from './components/SlotsParent.vue';

// import Compute from './components/Compute.vue';


// import NonProp from './components/NonProp.vue';

// import Form from './components/Form.vue';

export default {
    name: 'App',
    components: {
    SlotsParent
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
