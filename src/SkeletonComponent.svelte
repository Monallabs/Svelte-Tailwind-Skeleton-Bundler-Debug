<script>
    export let jp_props;
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    
  const components = {
    accordion: Accordion,
  };

  const descriptionObject = {
    ...jp_props.attrs,
    style: jp_props.style,
    class: jp_props.classes, 
  };

 const selected_component = components[jp_props.html_tag];
 
</script>

<svelte:element this=Accordion {...descriptionObject}></svelte:element>
<svelte:element this={selected_component} {...descriptionObject}></svelte:element>


