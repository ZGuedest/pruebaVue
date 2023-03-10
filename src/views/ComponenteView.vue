
  <template>
    <div class="example">
       
       <h1>Este es un nuemo componente BOTON</h1> 
       <componente-example></componente-example>
       <componente-example></componente-example>
    </div>
  </template>
<script>
import ComponenteExample from '@/components/ComponentExample.vue';

export default {
    name: "ComponenteView",
    props: {
        example: String
    },
    components: { ComponenteExample }
}
</script>