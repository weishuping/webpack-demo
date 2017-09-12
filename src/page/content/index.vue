<template>
    <div id="con">
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
    ul.navbar {
    }
    .navbar li {
        background: #cec;
        display: inline-block;
        width: 10%;
        height: 50px;
        line-height: 50px;
        margin-right: 15px;
        cursor: pointer;
    }
</style>