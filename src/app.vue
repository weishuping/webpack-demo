
<template>
    <div id="app">
        <div>
             <Temp :data="gL"></Temp>
        </div>
        
    </div>
</template>
<script>
 import Temp from './components/test/index.vue'
 import Data from '../static/mockData/nav.json'
    export default {
        
        data() {
            return {
                gL: Data.content
            }
        },
        components: {
            Temp
        }
        
    }
</script>