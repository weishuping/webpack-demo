<template>
    <div>
        <div class="navbar">
            <li v-for="item in arr">
                <i class="glyphicon glyphicon-home"></i>
                <router-link :to="{ name: 'test'+item.id, params: { id: item.id }}"> 
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