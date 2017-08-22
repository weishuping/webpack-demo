<template>
        <ul>
            <li>{{name}}</li>
        </ul>
</template>

<script>
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

