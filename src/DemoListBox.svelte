<script>
  import { CodeBlock, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
  let valueSingle = 'books';
  </script>

<div class="w-full max-w-[480px] card p-4 text-token">
					<ListBox>
						<ListBoxItem bind:group={valueSingle} name="medium" value="books">
							<svelte:fragment slot="lead"><i class="fa-solid fa-book text-xs w-6 text-center" /></svelte:fragment>
							Books
						</ListBoxItem>
						<ListBoxItem bind:group={valueSingle} name="medium" value="movies">
							<svelte:fragment slot="lead"><i class="fa-solid fa-film text-xs w-6 text-center" /></svelte:fragment>
							Movies
						</ListBoxItem>
						<ListBoxItem bind:group={valueSingle} name="medium" value="television">
							<svelte:fragment slot="lead"><i class="fa-solid fa-tv text-xs w-6 text-center" /></svelte:fragment>
							Television
						</ListBoxItem>
					</ListBox>
</div>

