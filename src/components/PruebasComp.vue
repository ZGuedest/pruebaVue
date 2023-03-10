<template>
    <div>
        <h2>Variable computada</h2>
        {{ miPrimeraPropiedad }}
    </div>
</template>

<script>
export default {
    name: 'PruebasComp',

    // variable reactiva que se puede cambiar
    data(){
        return{
        miPrimeraPropiedad: "Primera Propiedad reactiva// variable reactiva"
        }
  }
}

</script>
<style scoped>
h2{
    color: #42B883;
}
</style>
