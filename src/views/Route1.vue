<template>
    <div>
        <p>Route1.vue (Route: /route1)</p>
        <button @click="onClickGo">Go to /</button>
    
        <p>{{ message }}</p>
    
    
    </div>
</template>

<script>
  export default {
    name: 'Route1',
    data() {
        return{
            message:'Hello from route1 ...'
        }
    },
    methods: {
      onClickGo() {
        this.$router.push('/')
      }
    }
  }
</script>


<style scoped>
    p {
        color: blue;
    }
</style>