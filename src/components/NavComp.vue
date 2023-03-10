<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <img src="@/assets/developer.png" alt="Bootstrap" width="200" height="136">
  <div class="container justify-content-around">
          <router-link to="/" class="nav-link active" aria-current="page" ><span class="material-icons-round h1">
home</span></router-link>
          <router-link to="/about" class="nav-link"><span class="material-icons-round">info</span></router-link>
          <router-link to="/post" class="nav-link"><span class="material-icons-round">featured_play_list</span>
</router-link>
    </div>

</nav>
</template>

<script>
export default {
    name: 'NavComp'
    
}
</script>
<style scoped>
.material-icons-round{
    color:black;
   padding: 0.8em;
   border: 1px solid white;
  border-radius: 50%;
   background-color: rgb(193, 220, 228);
}
nav{
    background-color: #42b983;
}
</style>