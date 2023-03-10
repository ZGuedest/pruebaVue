<template>
    <div>
        <button @click="onHandlerCreate">Crear</button>
        <button @click="onHandlerDelete">Borrar</button>
        <button @click="onHandlerUpdate">Update</button>

    </div>
</template>

<script setup>

defineProps({

    name: String,
    last: String,
    age: Number,
    email: String,

    onHandlerCreate : Function,
    onHandlerDelete : Function,
    onHandlerUpdate: Function

})

</script>

<style lang="scss" scoped>

</style>