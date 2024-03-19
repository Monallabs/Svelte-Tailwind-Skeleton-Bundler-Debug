<script>
import ComponentRenderByType from './ComponentRenderByType.svelte';
   import { justpyComponents, setJustpyComponents } from './store_jpcomponents';
   $: console.log('Store value:', $justpyComponents);
		  
</script>


{#each $justpyComponents as jpcomp}
   <svelte:component this={ComponentRenderByType} jp_props={jpcomp}/>
{/each}

