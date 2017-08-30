<template>
    <span>{{name}}</span>
</template>

<script>
 import Data from '../../../static/mockData/nav.json'
    export default {
        
        data () {
            return {
                name: 'I am Wei!'
            }
        }
    }
</script>

<style>
    .message {
        color: blue;
    }
    li {
        list-style: none;
    }
</style>

