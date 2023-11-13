<!-- getting prpps value from parent -->

<template>
<h1>Student Component Child Component</h1>
<h4>Student name is : {{ name }}</h4>
</template>

<script>
export default {
    name: 'StudentComponent',
    props: {
        name: String
    }
}
</script>
