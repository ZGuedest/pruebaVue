<!-- Componente para repasar directivas v-if v-else-if v-else -->


<template>
    <div>
        <h2>{{ activo ? 'Estoy activo' : 'estoy inactivo' }}</h2>

        <h2 v-if='activo === false'>Estoy inactivo x2</h2>
        <h2 v-else-if='activo === true'>Estoy activo x2</h2>
        <h2 v-else>Estoy indeciso</h2>

    </div>
</template>

<script setup>
    const activo = true;
</script>

<style lang="scss" scoped>

</style>