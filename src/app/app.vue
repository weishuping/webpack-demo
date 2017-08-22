
<template>
    <div class="nav">
        
        <ul>
            <i class="glyphicon glyphicon-home"></i>
            <li v-for="t in titles">{{t.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                titles: [
                    {title: '主页'},
                    {title: '简历'}
                    
                ]
            }
        }
    }
</script>

<style>
    ul {
        background: #cec;
    }
    ul li {
        display: inline-block;
        width: 30px;
        height: 50px;
        line-height: 50px;
        margin-right: 15px;
        cursor: pointer;
    }
</style>

