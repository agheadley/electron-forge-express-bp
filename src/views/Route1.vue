<template>
    <div>
        <p>Route1.vue (Route: /route1)</p>
        <button @click="onClickGo">Go to /</button>

        <download-file :fileContent="csv" :fileName="file"></download-file>
        <p> </p>
        <upload-file v-on:fromUploadFile="onUploadFile"></upload-file>

    </div>
</template>

<script>
  
import DownloadFile from './../components/DownloadFile.vue'
import UploadFile from './../components/UploadFile.vue'

export default {
name: 'Route1',
components: {
    'download-file':DownloadFile,
    'upload-file':UploadFile
    
},
data() {
    return{
        message:'Hello from route1 ...',
        file:'test.csv',
        csv:encodeURIComponent('x,y,z')
    }
},
methods: {
    onClickGo() {
    this.$router.push('/')
    },
    onUploadFile(value) {
        console.log('uploaded file data: '+value)
    },


}
}
</script>


<style scoped>
    p {
        color: blue;
    }
</style>