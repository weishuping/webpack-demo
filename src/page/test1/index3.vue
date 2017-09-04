<template>
    <div>
        <Temp :data="Item"></Temp>
    </div>
</template>

<script>
import Items from '../../../static/mockData/move.json'
import Temp from '../content/select.vue'
    export default {
        
        data() {
            return {
                Item: Items.content
                // Item: ["aa","bb","cc","dd","ee"]
            }
        },
        components: {
            Temp
        }
    }
    
</script>