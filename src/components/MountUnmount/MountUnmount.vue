<template>
    <h1>Mount/Unmount</h1>
</template>
<script>
export default {
    name:'UnmountMount',
    beforeUnmount(){
  console.log('before Unmount')
},unmounted(){
  console.log('unmount successfully')
},
}
</script>