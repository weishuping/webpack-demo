<template>
    <div>
        <ul class="navbar">
            <li v-for="item in arr">
                <i class="glyphicon glyphicon-home"></i>
                <router-link :to="{ name: 'test'+item.id, params: { id: item.id }}"> 
                    {{item.text}} 
            </li>
           
        </div>
        <div>
            <router-view> </router-view>
        </div>
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