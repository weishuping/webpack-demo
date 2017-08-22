
<template>
    <div class="nav">
        
        <ul>
            <i class="glyphicon glyphicon-home"></i>
            <li v-for="t in titles">{{t.title}}</li>
        </ul>
        <span v-bind:title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
            <b>声明式将数据渲染进DOM</b>
        </span>   
        <p v-if="seen">现在你看到我了
            <b>条件与循环</b>
        </p>
        <div id="app-5">
            <p>{{ message }}</p>
            <button v-on: click="reverseMessage">逆转消息</button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                titles: [
                    {title: '主页'},
                    {title: '简历'}
                    
                ],
                message: '页面加载于 ' + new Date(),
                seen: true

            }
        }
    }
</script>

<style>
    .nav ul {
        background: #cec;
    }
    .nav ul li {
        display: inline-block;
        width: 30px;
        height: 50px;
        line-height: 50px;
        margin-right: 15px;
        cursor: pointer;
    }
</style>

