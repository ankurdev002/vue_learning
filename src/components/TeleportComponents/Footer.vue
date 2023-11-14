<template>
    <div class="footer">
        <h6>This is Footer</h6>
    </div>
</template>

<script>
export default {
    name:'FooterComponent'
}
</script>

<style>
.footer{
    background: #000;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;
}
</style>