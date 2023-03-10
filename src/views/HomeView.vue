<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <SaludoDinamico></SaludoDinamico>
  <ColoresComponente></ColoresComponente>
  <VonComp></VonComp>
  <ActivoInactivo></ActivoInactivo>
  <ReactividadAndComputadasVue></ReactividadAndComputadasVue>
  <VforCompon></VforCompon>
  <VshowComp></VshowComp>
  <HijoComp v-bind:user = "user"  v-on="events"></HijoComp>
  <BootstrapVue></BootstrapVue>


</template>

<script setup>

/////////////////////////////

import SaludoDinamico from '@/components/SaludoDinamico.vue';
import ColoresComponente from '@/components/ColoresComponente.vue';
import ReactividadAndComputadasVue from '@/components/ReactividadAndComputadas.vue.vue';
import VonComp from '@/components/VonComp.vue'
import ActivoInactivo from '@/components/ActivoInactivo.vue';
import VforCompon from '@/components/VforCompon.vue';
import VshowComp from '@/components/VshowComp.vue';

import BootstrapVue from '@/components/BootstrapVue.vue';

////////////////////////////

////***********PROPS ******************** */
import HijoComp from '@/components/HijoComp.vue'

  const user={
    name: 'Jhon',
    last: 'Doe',
    age: 50,
    email: 'jhondoe@gmail.com'
  }

  const events={
    handlerCreate : () => console.log('he sido creado'),
    handlerDelete : () => console.log('he sido borrado'),
    handlerUpdate : () => console.log('he sido actualizado'),

  }



</script>
