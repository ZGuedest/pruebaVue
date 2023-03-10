<!-- Componente para repasar estructuras basicas de componentes en vue y elementos como setup and {{}} -->

<template>
    <div>
        <h1>Hola {{ name.toUpperCase() }}</h1>
    </div>
</template>

<script setup> //que es setup 
    const name = 'Vue dinámico';
</script>

<style scoped> 
    h1 {
        color: darkmagenta;
    }
</style>