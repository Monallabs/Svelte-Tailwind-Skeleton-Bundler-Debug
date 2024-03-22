<script>
  import { TabGroup, Tab, CodeBlock, TabAnchor } from '@skeletonlabs/skeleton';
  let tabsBasic = 0;
</script>

<section class="w-full card p-4 text-token">
  <TabGroup border="border-b-1 border-surface-400-500-token" active="border-b-4 border-surface-900-50-token";>
    <Tab bind:group={tabsBasic} name="books" value={0}>Books</Tab>
    <svelte:fragment slot="panel">
							{#if tabsBasic === 0}
								<p>pu Book desc</p>
							{:else if tabsBasic === 1}
								<p>put movie desc</p>
							{:else if tabsBasic === 2}
								<p>put tv desc</p>
							{/if}
						</svelte:fragment>
  </TabGroup>
</section>
