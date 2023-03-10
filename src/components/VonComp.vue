<!-- Componente para repasar directivas v-on (@) -->

<template>
    <div>
        <button v-on:click='handleClick'>Activame</button>
        <button @click.right='handleClick'>Activame 2</button>
    </div>
</template>

<script setup>
    const handleClick = () => {
        console.log('me diste click');
    };

</script>

<style scoped>

</style>