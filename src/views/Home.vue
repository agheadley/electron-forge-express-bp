<template>
    <div>
        <p>Home.vue (Route: /)</p>
        <button @click="onClickGo">Go to /route1</button>
    
        <p>{{ message }}</p>
    
        <button @click="testPost">Test POST</button>
        
        <p> </p>
        <button @click="getDownload">Generate Download</button>
    
    
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
        fetch(request.url+'test', {  
            method: 'POST',  
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({req:'test'})
        }).then(res => res.json())
        .then (data=>{              
            this.message=data;
            console.log(data);
        }).catch(err=>{
            this.message=err;
            console.log(err);
        })
    },
    getDownload() {
        fetch(request.url+'generateDownload', {  
            method: 'POST',  
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data:'test,test2,test3\nx,y,z'})
        }).then(res => res.json())
        .then (data=>{              
            this.message=data;
            console.log(data);
            console.log(data.response)
            if(data.response==="SUCCESS") {
                let x=request.download('out.csv');
                console.log(x);
            }
        }).catch(err=>{
            this.message=err;
            console.log(err);
        })
    },
   


}
}
</script>


<style scoped>
    p {
        color: blue;
    }
</style>