
<template>
 <transition name="fade">
    <div class="home row">
        <div class="col-md-4">
            <div class="item" v-for="item in Info">
                <span>{{item.key}}</span><span>{{item.value}}</span>
            </div>
           
        </div>
          
        <div class="col-md-4 self">
            <img :src="Src.src"/>
        </div>
        <div class="col-md-4">
            <p>{{Memo.title}}</p>
            {{Memo.text}}
        </div>
    </div>
    </transition>
</template>
<script>
import Data from '../../../static/mockData/my.json'
console.log(Data)
    export default {
        data() {
            return {
                Info: Data.info,
                Src: Data.img,
                Memo: Data.memo[0]
            }
        }
       
        
    }
</script>
<style>
    .home .item {
        line-height: 1.5em;
        margin-top: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: 0;
        border-bottom: 1px solid #e0d3e0;
    }
    .self img {
        width: 100%;
        border-radius: 50%;
    }
    .home .memo {

    }
</style>