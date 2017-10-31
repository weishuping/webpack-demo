<template>
    <div>
        <div class="navbar">
            <li v-for="item in arr">
                <i :class="item.icon"></i>
                <router-link :to="{ name: item.id, params: { id: item.id }}"> 
                    {{item.text}} 
                </router-link>
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
    .navbar {
       background-color: #FFFAF0;
       margin-bottom: 0;
       padding: 0 12%;
    }
    .navbar li {
        display: inline-block;
        width: 10%;
        height: 50px;
        line-height: 50px;
        margin-right: 15px;
        cursor: pointer;
        color: #7EC0EE;
        font-size: 16px;
    }
    .navbar li a {
        color: #7EC0EE;
    }
</style>