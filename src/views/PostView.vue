<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="container">
    <div>
        <figure>
          <p>Charmander</p>
          <img src="../assets/Charmander.png" alt="Charmander">
         <figcaption class="like">
            <ButtonLike></ButtonLike>
        </figcaption>
        </figure>
    </div>
    <div>
      <figure>
        <p>Bulbasaur</p>
          <img src="../assets/Bulbaur.jpg" alt="Bulbasaur">
         <figcaption class="like">
            <button-like></button-like>
        </figcaption>
        </figure>
    </div>
    <div>
      <figure>
        <p>Sandslash</p>
          <img src="../assets/Sandslash.png" alt="Sandslash">
         <figcaption class="like">
            <button-like></button-like>
        </figcaption>
        </figure>

    </div>
    <div>
      <figure>
        <p>Picachu</p>
          <img src="../assets/Picachu.png" alt="Picachu">
         <figcaption class="like">
            <button-like></button-like>
        </figcaption>
        </figure>
    </div>
    <div>
      <figure>
        <p>Glaceon</p>
          <img src="../assets/Glaceon.png" alt="Glaceon">
         <figcaption class="like">
            <button-like></button-like>
        </figcaption>
        </figure>
      
    </div>
    <div>
      <figure>
        <p>Eevee</p>
          <img src="../assets/Eevee.png" alt="Eevee">
         <figcaption class="like">
            <button-like></button-like>
        </figcaption>
        </figure>
    </div>
  </div>
</template>

<script>
import ButtonLike from '@/components/ButtonLike.vue';

export default {
    name: "PostView",
    props: {
        msg: String
    },
    components: { ButtonLike }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  display: flex;
  justify-content: center;
  column-gap: 15rem;
  flex-wrap: wrap;
  
}

figure img{
  width: 18rem;
  border-radius: 50%;
  border:5px solid black;
  position: center;
}
.hello{
  margin-bottom: 2rem ;
}
p{
  font-size: 2rem;
}
figure{
  border-bottom:0.3rem solid rgba(128, 128, 128, 0.677);
  margin-bottom: 1rem;
}
</style>
