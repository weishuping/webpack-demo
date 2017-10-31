<template>
    <div class="container">
        <router-view></router-view>
    </div>
            

</template>

<script>
    export default {
        props: {
            data: Array
        },
        data() {
            return {
                arr: this.data
            }
        }
    }
    
</script>
<style lang="">
   
</style>