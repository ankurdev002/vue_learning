<template>
    <div class="card">
        <!-- defining the slot using the name to each slot through which each slot will render -->
        <slot name="content"></slot>
        <slot name="contenttwo"></slot>
        <slot name="contentthree"><button>Click Me</button></slot>
    </div>

</template>

<script>
export default {
    name: 'SlotNew' 
}
</script>

<style>
.card{
    padding: 5px;
    border: 1px solid lightblue;
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
</style>