<template>
    <div id="app" class="container mt-5">
        <div :class="['p-3','text-white', fondo]">
            
            <input type="text" class="form-control my-3" v-model="fondo">
            <p>{{ fondo }}</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
    const fondo = ref ('bg-warning');
</script>

<style lang="scss" scoped>

</style>