<!-- Componente para repasar directivas v-for -->

<template>
    <div>
        <ul>
            <li v-for='(color, index) in colores' :key='index'>{{ index }}-{{ color }}</li>
        </ul>

        <ul>
            <li v-for='fruta in frutas' :key='fruta.name'>
            {{ fruta.name }}-{{ fruta.price }}-{{ fruta.description }}
            </li>
        </ul>

        <h2>{{ objFruta }}</h2>

        <ul>
            <li v-for='(value, propiedad, index) in objFruta' :key='value'>
            {{ index }}- {{ propiedad }}: -{{ value }}
            </li>
        </ul>

        <ul>
            <template v-for='item in frutas' :key='item.name'>
            <li v-if='item.stok > 0'>{{ item.name }}:-{{ item.price }}</li>
            </template>
        </ul>
    </div>
</template>

<script setup>

    const frutas = [
    {
        name: 'manzana',
        price: '$1.00',
        description: 'Una manzana',
        stok: 0,
    },
    {
        name: 'fresa',
        price: '$3.00',
        description: '10 fresas',
        stok: 2,
    },
    {
        name: 'mango',
        price: '$5.00',
        description: 'Dos mangos',
        stok: 1,
    },
    ];

    const objFruta = {
    name: 'kiwi',
    price: '$2.00',
    };

    const colores = ['blue', 'red', 'yellow', 'pink'];

</script>

<style scoped>

</style>