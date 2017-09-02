<template>
    <div>
        <div class="navbar">
        <router-link to="/test/1">
            <li>
                <i class="glyphicon glyphicon-home"></i>
                11
            </li>
        </router-link>
           <router-link to="/test/2">
            <li>
                <i class="glyphicon glyphicon-home"></i>
                22
            </li>
        </router-link>
        <router-link to="/test/1">
            <li>
                <i class="glyphicon glyphicon-home"></i>
                11
            </li>
        </router-link>
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