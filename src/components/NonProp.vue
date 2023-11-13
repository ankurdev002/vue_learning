<!-- understanding of concept non prop value like attrs -->
<template>
    <div>
        <h2 v-bind="$attrs">Non prop</h2>
        <h4>ankur</h4>
        <h4>ankit</h4>
        <h4>aman</h4>
        <h4>{{ data }}</h4>
    </div>
</template>

<script>
export default {
    name: 'NoneProp',inheritAttrs:false, props: {
        data:String
    }
}
</script>