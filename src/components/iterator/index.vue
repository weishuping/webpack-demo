<template>
    <div>
        <div v-for="arr in dataEdu" class="iterator">
            <h2 :class="classes">{{arr.begin_date}}-{{arr.end_date}}</h2>
            <p>{{arr.title}}</p>
            <h5>{{arr.memo}}</h5>
            <div class="long-text">{{arr.text}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            data: Array,
            class2: String
        },
        data() {
            return {
                dataEdu: this.data,
                classes: this.class2
            }
        }
    }
</script>
<style>
    .iterator h2 {
        color: #fff;
    }
    .iterator p, iterator h5 {
        font-size: 16px;
    }
    .iterator .long-text {
        color: #696969;
    }
</style>