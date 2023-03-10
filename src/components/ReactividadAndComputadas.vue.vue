<!-- Componente para repasar reactividad y propiedades computadas en vue-->


<template>
    <div>
        <h2>
            <span v-if='counter > 0' :style='colorblue'>
            {{ counter }}
            </span>
            <span v-else :style='colorred'>
            {{ counter }}
            </span>
        </h2>

        <h2 :class="counter > 0 ? 'positive' : 'negative'">
            {{ counter }}
        </h2>

        <h2 :class='classCounter'>
            {{ counter }}
        </h2>

        <button @click="modificar('aumentar')">Aumentar</button>
        <button @click="modificar('disminuir') ">Dismuniur</button>
        <button @click="modificar('reset')">Resetear</button>
        <button @click="agregar()">Agregar</button>

    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    const colorred = 'color:red';
    const colorblue = 'color:blue';
    const counter = ref(0);

    
    const modificar = (param) => {
    if (param === 'aumentar') {
        counter.value++;
    } else if (param === 'disminuir') {
        counter.value--;
    } else {
        counter.value = 0;
    }
    };

    const numeros= ref([]);
    const agregar= ()=>{
        debugger
        console.log("el contador   ",counter.value)
        
        let contenido=numeros.value.includes(counter.value,0)
        if(contenido === false){
            numeros.value.push(counter.value)
        }
        alert("el arreglo",numeros.value)
    }

    const classCounter = computed(() => {
    let result = '';
    if (counter.value === 0) {
        result = 'zero';
    } else if (counter.value > 0) {
        result = 'positive';
    } else {
        result = 'negative';
    }
    return result;
    });

</script>

<style  scoped>
  
    .positive {
    color: green;
    }

    .negative {
    color: red;
    }

    .zero {
    color: yellow;
    }

</style>