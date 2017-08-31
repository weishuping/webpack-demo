
<template>
    <div class="home row">
        <div class="col-md-4">
            <div class="edu" >
                工作经历
            </div>
           
        </div>
          
        <div class="col-md-8">
            <Temp :data="Info" :class2="class2"></Temp>
        </div>
    </div>
</template>
<script>
import Temp from '../../components/iterator/index.vue'
import Data from '../../../static/mockData/my.json'
console.log(Data)
    export default {
        data() {
            return {
                Info: Data.work,
                class2: 'bg-work'
            }
        },
        components: {
            Temp
        }
       
        
    }
</script>
<style>
    .bg-work {
        background: #B9D3EE;
    }
</style>