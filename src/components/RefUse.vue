<!-- use of refs in vue js -->
<template>
<h1>Using Ref</h1>
<input type="text" ref="input"/>
<button v-on:click="getDetails">USE REF</button>
</template>
<script>
export default {
    name: 'RefUse',
    methods: {
        getDetails() {
            this.$refs.input.focus()
            let value = this.$refs.input.value;
            console.log(value)
        }
    }
}
</script>