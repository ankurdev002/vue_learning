<template>
<h2>Computed Properties:</h2>
<h3>{{compCalcDiscount}}</h3>
<h3>{{calcDiscount()}}</h3>

<h1>Watchers</h1>

<h3>{{ count }}</h3>

<button v-on:click="count= count + 1">+</button>
<button v-on:click="count= count - 1">-</button>
</template>

<script>
export default {
    name: 'ComputedProperties',
    // watchers are generally used to watch data property with same name
    watch: {
        count(val,prev) {
            if (val>5 && prev<val) {
                
                alert('counting stopped')
            }
      }  
    },
    // it is used for caching particular value if we dont want to recalculate it
    computed: {
        compCalcDiscount() {
            return this.fees - (this.fees * this.discount / 100) * Math.random()
        }
    },
    // returns the initial reactive state for the component instance
    data() {
        return {
            fees: 100,
            discount: 25,
            count:0
        };
    },
    // in this all the instances belong to this particualr component is stored
    methods: {
        calcDiscount() {
            return this.fees - (this.fees * this.discount / 100) * Math.random();
        }
    }
}
</script>
