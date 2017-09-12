
<template>
    <div class="home row">
        <div class="col-md-4">
            <div class="edu" >
                教育经历
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
                Info: Data.edu,
                class2: 'bg-edu'
            }
        },
        components: {
            Temp
        }
       
        
    }
</script>
<style>
    .bg-edu {
        background: #EE6363;
    }
    .home .edu {
        line-height: 1.5em;
        margin: 0 auto;
        text-align: center;
        font-size: 32px;
        margin-top: 10px;
    }
   
</style>