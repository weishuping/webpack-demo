
<template>
    <div id="app">
             <Temp :data="gL"></Temp>
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
            Temp,
            Index,
            Edu,
            Work,
            Music
        }
        
    }
</script>