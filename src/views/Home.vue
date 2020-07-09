<template>
    <div>
        <p>Home.vue (Route: /)</p>
        <button @click="onClickGo">Go to /route1</button>
    
        <p>{{ message }}</p>
    
        <button @click="testPost">Test POST</button>
    
    </div>
</template>

<script>

import * as request from './../scripts/request';

export default {
name: 'Home',
data() {
    return{
        message:'Hello from home ...'
    }
},
methods: {
    onClickGo() {
    this.$router.push('/route1')
    },
    testPost() {
        request.post({data:"test response received!"},"/test",data=>{
            console.log(data);
            this.message=data;
        });
    }
}
}
</script>


<style scoped>
    p {
        color: blue;
    }
</style>