
<template>
    <div>
        
        <div>声明式将数据渲染进DOM
            <span v-bind:title="message">
                鼠标悬停几秒钟查看此处动态绑定的提示信息！
            </span>
        </div>
        <div>条件与循环
            <p v-if="seen">现在你看到我了</p>
        </div>
        <div id="app-5">处理用户输入
            <p>{{ message }}</p>
            <!-- 我写了个 on: click 然后就出错 -->
            <button v-on:click="reverseMessage">逆转消息</button>
        </div>
        <div id="app-6">
            <input v-model="message2">{{message2}}
        </div>
        <div id="app-7">
            <ol>
                <!--
                现在我们为每个 todo-item 提供 todo 对象
                todo 对象是变量，即其内容可以是动态的。
                我们也需要为每个组件提供一个“key”，晚些时候我们会做个解释。
                -->
                <todo-item
                v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id">
                </todo-item>
            </ol>
        </div>
        <button v-bind:disabled="isButtonDisabled">button</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '页面加载于 ' + new Date(),
                seen: true,
                message2: '',
                groceryList: [
                    { id: 0, text: '蔬菜' },
                    { id: 1, text: '奶酪' },
                    { id: 2, text: '随便其他什么人吃的东西' }
                ],
                isButtonDisabled: false
            }
        },
        methods: {
            reverseMessage: function() {
                this.message = this.message.split('').reverse().join('');
                console.log('123');
            }
        }
        
    }
</script>

<style>
    
</style>

