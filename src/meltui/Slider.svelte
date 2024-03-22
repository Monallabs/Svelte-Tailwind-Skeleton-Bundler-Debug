<script lang="ts">
  import { createSlider, melt } from '@melt-ui/svelte';

  export let jp_props;

  console.log("From Slider"):
  console.log(jp_props.attrs);
  const {
    elements: { root, range, thumbs },  } = createSlider(jp_props.attrs);
  
  
</script>

<span
  use:melt={$root}
  class="relative flex h-[200px] w-[3px] flex-col items-center"
>
  <span class="h-[200px] w-full bg-black/40">
    <span use:melt={$range} class="w-full bg-white" />
  </span>

  <span
    use:melt={$thumbs[0]}
    class="h-5 w-5 rounded-full bg-white focus:ring-4 focus:!ring-black/40"
  />
</span>
