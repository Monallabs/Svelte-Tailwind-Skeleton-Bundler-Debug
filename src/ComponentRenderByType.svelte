<script>
   import SkeletonComponent from './SkeletonComponent.svelte';
   
   let components =  {
		    'skeleton_component': SkeletonComponent
                    
                    };
   export let jp_props;
		  
</script>

<svelte:component this={components[jp_props.vue_type]} jp_props={jp_props} />




