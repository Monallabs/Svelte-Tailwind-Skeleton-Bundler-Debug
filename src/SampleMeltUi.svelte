<script>
  import { createCollapsible, melt } from '@melt-ui/svelte'
  const { open, root, content, trigger } = createCollapsible()
</script>
 
<div use:melt={$root}>
  <button use:melt={$trigger}>{$open ? 'Close' : 'Open'}</button>
  <div use:melt={$content}>Obi-Wan says: Hello there!</div>
</div>