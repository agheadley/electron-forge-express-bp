<template>
    <div>
        <p>DownloadFile.vue component</p>
       
        <template v-if="isDownloaded===false">
        <p>download file : </p>
        <a @click="removeFile" v-bind:href="fileData" v-bind:download="fileName">{{fileName}}</a>
        </template>
    
        <template v-if="isDownloaded===true">File downloaded.</template>
    
    </div>
</template>

<script>

//https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server


export default {
name: 'DownloadFile',
data() {
    return{
        fileData:'data:text/plain;charset=utf-8,',
        isDownloaded:false
    }
},
props: {
    fileContent:String,
    fileName:String
},
created() {
    //this.fileContent+=encodeURIComponent(this.content);
    this.fileData+=this.fileContent;
    console.log(this.fileContent);
},
methods: {
    removeFile() {
        this.isDownloaded=true;
    }
}
}
</script>


<style scoped>
    div {
        border:1px solid black;
    }
    p {
        color: red;
    }
</style>