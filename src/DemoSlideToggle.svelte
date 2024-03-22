<script>
  import { SlideToggle } from '@skeletonlabs/skeleton';
  let checkedValue = true;
</script>
<div class="space-y-4">
<div class="flex items-center gap-4">
  <SlideToggle name="slider" checked />
</div>

<div class="flex items-center gap-4 variant-ringed-secondary">
  <SlideToggle name="slider2" checked />
</div>

<div class="flex items-center gap-4 variant-filled-primary">
  <SlideToggle name="slider-label" bind:checked={checkedValue}>
    <span class="inline-block w-[100px] text-left">Powered {checkedValue ? 'On' : 'Off'}</span>
  </SlideToggle>
</div>
</div>
