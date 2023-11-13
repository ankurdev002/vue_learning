<!-- parent slot where it is defined the details -->
<!-- defining the v-slot name here -->
<template>
<h1>Parent SLot</h1>
<Slots>
    <template v-slot:content>
        <h1 >Code running</h1>
    </template>
    <template v-slot:contenttwo>
        <h4>this is testing product</h4>
    </template>
    <template v-slot:contentthree>
        <button>Buy Now</button>
    </template>
    <!-- empty slots -->
  </Slots><Slots>
    <template v-slot:content>
        <h1 >Code running</h1>
    </template>
    <template v-slot:contenttwo>
        <h4>this is testing product</h4>
    </template>
    <template v-slot:contentthree>
     <!-- by default slots value here -->
    </template>

  </Slots>
</template>

<script>
import Slots from './Slots.vue';

export default {
    name: "ParentSlot",
    components: { Slots }
}
</script>