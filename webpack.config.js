
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
     //entry: './src/index.js',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080/',
            './src/index.js'
            ]
    },
    output: {
        filename: 'bundle.js',
        //filename: '[name].bundle.js',
        //path模块提供了一些用于处理文件路径的小工具。
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{inline:true},
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },{
            //     test: /\.less$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'less-loader'
            //     ]
            // },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: [ 'css-loader', 'less-loader'],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        
        //new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management',
        //     filename: 'index.html',
        //     disable: false,
        //     allChunks: true
        // })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.common.js'
        }
    }

};