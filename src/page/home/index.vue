
<template>
        <div>
             <div class="container">
                <Index></Index>
                <Edu></Edu>
                <Work></Work>
                <Music></Music>
             </div>
        </div>
</template>
<script>
import Data from '../../../static/mockData/nav.json'
import Index from '../content/home.vue'
import Edu from '../content/edu.vue'
import Work from '../content/work.vue'
import Music from '../content/music.vue'

    export default {
        
        data() {
            return {
                gL: Data.content
            }
        },
        components: {
            Index,
            Edu,
            Work,
            Music
        }
        
    }
</script>