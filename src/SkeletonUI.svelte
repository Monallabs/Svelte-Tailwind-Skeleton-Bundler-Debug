
<script lang="ts">
let visible: boolean = true;
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@skeletonlabs/skeleton';
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
let tabSet: number = 0;
let tabsBasic = 0;

</script>

<button type="button" class="btn variant-filled-primary">Button</button>

<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead">TheLead</svelte:fragment>
		<svelte:fragment slot="summary">Accordian Summary</svelte:fragment>
		<svelte:fragment slot="content">Accordian content</svelte:fragment>
	</AccordionItem>

</Accordion>

<TabGroup>
<Tab bind:group={tabSet} name="tab1" value={0}>Books</Tab>
<Tab bind:group={tabSet} name="tab2" value={1}>Movie</Tab>

<svelte:fragment slot="panel">
							{#if tabSet === 0}
								<p> written or printed work consisting of pages glued or sewn together along one side and bound in covers.</p>
								{:else if tabSet === 1}
								<p> Movies content</p>
							{/if}
							
						</svelte:fragment>
</TabGroup>

