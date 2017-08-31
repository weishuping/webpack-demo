<template>
    <div>
        <ul class="navbar">
            <li v-for="item in arr">
                <i v-bind:class="item.icon"></i>
                    {{item.text}} 
            </li>
        </ul>
        
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
       background-color: #FFEFDB;
       margin-bottom: 0;
    }
    .navbar li {
        display: inline-block;
        width: 10%;
        height: 50px;
        line-height: 50px;
        margin-right: 15px;
        cursor: pointer;
        color: #8DB6CD;
        font-size: 16px;
    }
</style>