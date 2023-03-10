<!-- Componente para repasar directivas v-bind (:) -->

<template>
    <div>
    </div>
    <h2 v-bind:style='colorblue'>Soy azul</h2>
    <h2 :style='`color:${colores[1]}`'>Soy rojo</h2>
    <h2>{{ colores }}</h2>
</template>

<script setup>
    const colorblue = 'color:blue';

    const colores = ['blue', 'red', 'yellow', 'pink'];

</script>

<style lang="scss" scoped>

</style>