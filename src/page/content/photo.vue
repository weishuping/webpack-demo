
<template>
    <div class="home photo row">
        <div class="col-md-2">
            <div class="bottom-line" >
                <router-link to="./test1">
                我的相册
                </router-link>
                <router-view></router-view>
            </div>
           
        </div>
          
        <div class="col-md-10">
            <span class="col-md-3 wrapper-img" v-for="(item,index) in imgs" v-on:mouseenter="showText(index)">
                <img :src="item.src"/>
                <span v-if="index == isshow" class="dis-text">{{item.text}}</span>
            </span>
        </div>
    </div>
</template>
<script>
import data from ' ../../../static/mockData/photo.json'
    export default {
        data() {
            return {
                isshow: null,
                text: '',
                imgs: data.content
            }
        },
        methods: {
            showText(index) {
                this.text = this.imgs[index].text;
                this.isshow = index;
            }
        }
    }
</script>
<style>
    .photo img {
        width: 100%;
        height: 100%;
        margin-top: 20px;
    }
    .wrapper {
        position: relative;
    }
    .dis-text {
        position: absolute;
        top: 35%;
        font-size: 64px;
        color: #F08080;
        left: 38%;
    }
</style>