<template>
<div>
<button type="submit" @click="add">+</button>
 <input type="text" id="message" class="form-control" v-model="message">
<button type="submit" @click="minus">-</button>
 </div>
 <div>
{{message}}
 <div>
</template>
<script>


export default {
       created:function(){
                this.message = 0;
            },
      methods:{
            add:function () {
                  this.message++;
            document.getElementById("message").value=this.message
          
            },
            minus:function () {
             this.message--;
             document.getElementById("message").value=this.message
            }
    }
 }
</script>
<style>

</style>
