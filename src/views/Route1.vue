<template>
    <div>
        <p>Route1.vue (Route: /route1)</p>
        <button @click="onClickGo">Go to /</button>
    
        <p>{{ message }}</p>

        <input @change="getFile" type="file" id="input" multiple>
    
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'Route1',
    data() {
        return{
            message:'Hello from route1 ...',
            file:null
        }
    },
    methods: {
      onClickGo() {
        this.$router.push('/')
      },
      getFile() {
          this.file=document.getElementById('input').files[0];
          console.log(this.file);
          if (this.file) {
            var reader = new FileReader();
            reader.readAsText(this.file, "UTF-8");
            reader.onload = (evt) => {
                console.log(evt.target.result);
                this.message=evt.target.result;
                
            }
            reader.onerror = function (evt) {
               console.log("error reading file");
            }  
         }
      }
    
    }
  }
</script>


<style scoped>
    p {
        color: blue;
    }
</style>