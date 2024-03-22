<script>
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<Accordion class="card p-4 text-token">
  <AccordionItem open>
    <svelte:fragment slot="lead"><span class="text-xl w-6 text-center">Lead</span></svelte:fragment>
    <svelte:fragment slot="summary"><p class="font-bold">What is Día de los Muertos?</p></svelte:fragment>
    <svelte:fragment slot="content">
      <!-- prettier-ignore -->
      <p>
	While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.
      </p>
    </svelte:fragment>
  </AccordionItem>
</Accordion>
