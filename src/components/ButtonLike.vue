<template>
<div class="like">
    <p>Likes  {{ like }} </p>
    <button class="btn" @click="likes"><img src="@/assets/like.png" alt="">
     
    </button>
</div>
</template>

<script setup>
import{ ref } from "vue";

let like = ref(0);
    const likes =()=>{
        console.log("me gusta");
        console.log(like)
        like.value++;
    }

//  export default {
//     name: "button-like",
    
//    setup(){
    
//     return{
//         likes,
//         like
//     }

//    },
 //}
</script>
<style scoped>
.btn{
        padding:3px 5px;
        border:none;
        border-radius: 5px;
        color:#3fbce6;
        cursor:pointer;
        font-weight: 700;
        letter-spacing: 2px;
        transition:.3s;
        border:2px solid #3fbce6;
        background-color: #3fbce6;
}
.btn:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

img{
    width: 2rem;
}
.like{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
padding: 1rem;
}

</style>