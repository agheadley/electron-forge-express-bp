<template>
    <div>
        <p>UploadFile.vue component</p>
        <template v-if="isUploaded===false">
            <p>Upload file:</p>
        <input @change="getFile" type="file" id="input" multiple>
        </template>
         <template v-if="isUploaded===true">
              <p>file content :</p>
             <p>{{fileContent}}</p>
        </template>

     </div>
</template>

<script>

//https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server


export default {
name: 'UploadFile',
data() {
    return{
        isUploaded:false,
        fileContent:null
    }
},
created() {
},
methods: {
    getFile() {
        this.file=document.getElementById('input').files[0];
        console.log(this.file);
        if (this.file) {
            var reader = new FileReader();
            reader.readAsText(this.file, "UTF-8");
            reader.onload = (evt) => {
                console.log(evt.target.result);
                this.message=evt.target.result;
                this.fileContent=evt.target.result;
                this.isUploaded=true;
                this.$emit('fromUploadFile',this.message);
                
            }
            reader.onerror = function (evt) {
                    console.log("error reading file");
                    this.$emit('fromUploadFile','ERROR');
            }  
        }
    }
}

}
</script>


<style scoped>
    div {
        border:1px solid black;
    }
    p {
        color: blue;
    }
</style>