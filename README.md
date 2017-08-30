#### 起步
安装webpack
    npm init -y
    npm install --save-dev webpack
    (-save 自动把模块和版本号添加到dependencies(依赖)部分，-save-dev自动把模块和版本号添加到devdependencies部分)
创建一个bundle文件
    将源代码（/src）从我们的“分发”代码（/dist）中分离出来。“源”是用于书写和编辑的代码。“分发”代码是构建过程中产生的代码最小化和优化后的“输出”目录，最终在浏览器加载。
    安装库 
        npm install --save loadsh
    引入。
    执行webpack，我们的脚本作为 入口，输出为 bundle.js
使用配置文件
    新建webpack.config.js.(有入口，有输出)
NPM脚本
    可以设置快捷方式 运行
     在package.json中加入“script”:{"build": "webpack"}
    运行 npm run build
（如果npm>5 会有一个lock文件）
#### 管理资源
(将动态打包所有依赖项)
(可以通过loader引入任何其他类型的文件)
安装
加载css
    安装并添加style-loader和css-loader
    npm install --save-dev style-loader css-loader
     加载less
     npm install --save-dev less less-loader
     如果想要放到一个style.css里面
        npm install --save-dev extract-text-webpack-plugin
        修改webpack配置
        合并到一起
加载图片
    npm install --save-dev file-loader
加载数据
    npm install --save-dev csv-loader xml-loader
 安装字体

#### 管理输出
设定 HtmlWebpackPlugin
安装插件，调整webpack.config.js
    npm install --save-dev html-webpack-plugin
清理/dist文件夹
安装,调整w.c.js
npm install clean-webpack-plugin --save-dev

安装vue
npm install --save-dev vue
 解析vue的组件，.vue后缀的文件
npm install --save-dev vue-loader vue-template-compiler

安装server
npm install --save-dev webpack-dev-server
主要是使用express的Http服务器。作用主要是 资源文件。

服务启动 页面没改变。。
解释： 但这里可能会遇到，我们改动js文件，无法实时更新的问题，很大一部分原因是没有理解编译后的bundle是虚拟的问题，本地其实质是没有编译的，所以我们不能用本地的路径去处理，需要进行更改为http://localhost:8080/bundle.js.

webpack-dev-server 提供了自动刷新页面 inline模式
问题： 
多入口文件 单入口文件？
字体怎么引入？
2017-7-24
安装 vue-router
2017-08-21
安装Es6
npm install --save-dev babel-core babel-loader babel-preset-es2015 安装babel，babel的作用是将es6的语法编译成浏览器认识的语法es5
2017-08-21
Vue2+Webpack报错：Failed to mount component: template or render function not defined.
如果vue选择安装2+，vue2.0有两种构建模式，默认情况下运行构建，但是不能解析单文件的template模板，所以要使用独立构建，需要在alias中指定vue$的模块别名地址。
所以把webpack配置改了；
 resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.common.js'
        }
    }
2017-08-25
出了问题参考https://segmentfault.com/a/1190000008602934
2017-08-26
今天在写组件的时候，一直出错；；原来是 v-for 不能作用于顶层dom。之后还有 传值问题；
2017-08-29
router-link 动态赋值
to="{ name: '搜索user', params: { userId: 123 }}";
遇到的问题： 菜单是循环生成的，必然对应不同的路由；但是我这个路由很有规律；我就想要把这些做到一起；
在router里面: 接受参数。所以就是动态配置路由并且嵌套路由；
这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 <router-view>。
所以在index.vue增加view；并且在路由设置中，要有父组件;
问题： 重复加载；