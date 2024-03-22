<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { AppBar } from '@skeletonlabs/skeleton';
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

  
safe_tag_arr = ["w-16", "h-8", "bg-surface-900", "dark:bg-surface-300",  "w-[50%]", "h-full", "scale-[0.8]", "transition-all", "duration-[200ms]", "shadow", "rounded-full", "bg-white/75", "translate-x-full", 'inline-block', 'transition-colors', 'duration-100', "hover:brightness-[105%]",  "dark:hover:brightness-110",    'cursor-pointer', 'w-0', 'h-0', 'overflow-hidden', 'border-b-2', 'border-b', 'border-b-4', 'flex-none', 'invisible', 'aspect-[21/9]', 'bg-black/50', 'gap-4', 'opacity-50', 'flex-auto', 'justify-between', 'items-center', 'absolute', 'bg-amber-100', 'bg-amber-200', 'bg-amber-300', 'bg-amber-400', 'bg-amber-500', 'bg-amber-600', 'bg-amber-700', 'bg-amber-800', 'bg-amber-900', 'bg-black-100', 'bg-black-200', 'bg-black-300', 'bg-black-400', 'bg-black-500', 'bg-black-600', 'bg-black-700', 'bg-black-800', 'bg-black-900', 'bg-blue-100', 'bg-blue-100/50', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900', 'bg-cyan-100', 'bg-cyan-200', 'bg-cyan-300', 'bg-cyan-400', 'bg-cyan-500', 'bg-cyan-600', 'bg-cyan-700', 'bg-cyan-800', 'bg-cyan-900', 'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-emerald-800', 'bg-emerald-900', 'bg-fuchsia-100', 'bg-fuchsia-200', 'bg-fuchsia-300', 'bg-fuchsia-400', 'bg-fuchsia-500', 'bg-fuchsia-600', 'bg-fuchsia-700', 'bg-fuchsia-800', 'bg-fuchsia-900', 'bg-gradient-to-r', 'bg-gray-100', 'bg-gray-100/20', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-400/20', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900', 'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900', 'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800', 'bg-indigo-900', 'bg-inherit', 'bg-lime-100', 'bg-lime-200', 'bg-lime-300', 'bg-lime-400', 'bg-lime-500', 'bg-lime-600', 'bg-lime-700', 'bg-lime-800', 'bg-lime-900', 'bg-neutral-100', 'bg-neutral-200', 'bg-neutral-300', 'bg-neutral-400', 'bg-neutral-500', 'bg-neutral-600', 'bg-neutral-700', 'bg-neutral-800', 'bg-neutral-900', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700', 'bg-orange-800', 'bg-orange-900', 'bg-pink-100', 'bg-pink-100/20', 'bg-pink-100/30', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700', 'bg-pink-800', 'bg-pink-900', 'bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900', 'bg-rose-100', 'bg-rose-200', 'bg-rose-200/20', 'bg-rose-300', 'bg-rose-400', 'bg-rose-500', 'bg-rose-600', 'bg-rose-700', 'bg-rose-800', 'bg-rose-900', 'bg-sky-100', 'bg-sky-200', 'bg-sky-300', 'bg-sky-400', 'bg-sky-500', 'bg-sky-600', 'bg-sky-700', 'bg-sky-800', 'bg-sky-900', 'bg-slate-100', 'bg-slate-200', 'bg-slate-300', 'bg-slate-400', 'bg-slate-500', 'bg-slate-600', 'bg-slate-700', 'bg-slate-800', 'bg-slate-900', 'bg-stone-100', 'bg-stone-200', 'bg-stone-300', 'bg-stone-400', 'bg-stone-500', 'bg-stone-600', 'bg-stone-700', 'bg-stone-800', 'bg-stone-900', 'bg-teal-100', 'bg-teal-200', 'bg-teal-300', 'bg-teal-400', 'bg-teal-500', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800', 'bg-teal-900', 'bg-violet-100', 'bg-violet-200', 'bg-violet-300', 'bg-violet-400', 'bg-violet-500', 'bg-violet-600', 'bg-violet-700', 'bg-violet-800', 'bg-violet-900', 'bg-white-100', 'bg-white-200', 'bg-white-300', 'bg-white-400', 'bg-white-500', 'bg-white-600', 'bg-white-700', 'bg-white-800', 'bg-white-900', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900', 'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-300', 'bg-zinc-400', 'bg-zinc-500', 'bg-zinc-600', 'bg-zinc-700', 'bg-zinc-800', 'bg-zinc-900', 'border', 'border-1', 'border-2', 'border-blue-400', 'border-gray-100', 'border-gray-300', 'border-gray-400/20', 'border-gray-500', 'border-gray-600', 'border-none', 'border-rose-600', 'border-solid', 'container', 'disabled:bg-gray-400', 'disabled:border-slate-200', 'disabled:shadow-none', 'disabled:text-slate-500', 'flex', 'flex-1', 'flex-col', 'flex-row', 'flex-row-reverse', 'flex-wrap', 'font-bold', 'font-medium', 'font-semibold', 'font-thin', 'from-gray-200', 'gap-1', 'grid', 'grid-cols-1', 'grid-cols-3', 'grid-flow-row', 'grid-rows-2', 'h-5/6', 'h-6', 'h-64', 'h-8', 'h-max', 'h-screen', 'hidden', 'hover:bg-gray-100', 'hover:bg-gray-200', 'hover:border', 'hover:border-gray-200', 'hover:outline-4', 'hover:rounded-md', 'hover:shadow-md', 'hover:text-gray-900', 'invisible', 'justify-around', 'justify-center', 'justify-end', 'justify-start', 'leading-normal', 'lg:grid-cols-3', 'list-disc', 'm-2', 'max-w-md', 'max-w-prose', 'mb-1', 'mb-2', 'mb-4', 'md:grid-cols-2', 'md:w-1/3', 'ml-2', 'mr-1', 'mr-2', 'mr-4', 'mt-0', 'mt-1', 'mt-4', 'mt-64', 'mt-8', 'mx-0', 'mx-1', 'mx-2', 'mx-auto', 'my-0', 'my-1', 'object-contain', 'opacity-80', 'outline', 'outline-2', 'outline-black', 'outline-double', 'outline-none', 'outline-offset-2', 'overflow-auto', 'overflow-x-auto', 'p-0', 'p-1', 'p-2', 'p-4', 'pl-4', 'prose-lg', 'px-1', 'px-2', 'px-4', 'py-1', 'py-2', 'relative', 'right-1', 'rounded-2xl', 'rounded-full', 'rounded-lg', 'rounded-xl', 'shadow', 'shadow-cyan-500/50', 'shadow-gray-200', 'shadow-gray-400', 'shadow-md', 'sm:grid-cols-1', 'sm:max-md:hidden', 'sm:max-md:w-full', 'space-x-2', 'space-x-4', 'space-x-8', 'space-y-1', 'space-y-2', 'space-y-4', 'space-y-6', 'space-y-8', 'text', 'text-4xl', 'text-6xl', 'text-blue-600', 'text-blue-700', 'text-center', 'text-gray-400', 'text-gray-600', 'text-gray-800', 'text-green-500', 'text-green-700', 'text-lg', 'text-pink-200', 'text-pink-300', 'text-purple-600', 'text-purple-700', 'text-red-600', 'text-right', 'text-rose-300', 'text-rose-500', 'text-sm', 'text-xl', 'to-gray-200', 'top-1', 'uppercase', 'via-gray-100', 'w-1/2', 'w-1/3', 'w-2/3', 'w-5/12', 'w-6', 'w-96', 'w-full', 'w-screen']
let concString = safe_tag_arr.join(' ');

</script>


<div class="badge variant-filled variant-filled-primary variant-filled-secondary variant-filled-tertiary variant-filled-success badge variant-filled-warning variant-filled-error variant-filled-surface variant-ghost variant-ghost-primary variant-ghost-secondary variant-ghost-tertiary variant-ghost-success variant-ghost-warning variant-ghost-error variant-ghost-surface variant-soft variant-soft-primary variant-soft-secondary variant-soft-tertiary variant-soft-success variant-soft-warning variant-soft-error variant-soft-surface variant-ringed variant-ringed-primary variant-ringed-secondary variant-ringed-tertiary variant-ringed-success variant-ringed-warning variant-ringed-error variant-ringed-surface variant-glass variant-glass-primary variant-glass-secondary variant-glass-tertiary variant-glass-success variant-glass-warning variant-glass-error variant-glass-surface
"></div>

<div class="card text-token"></div>

<div class="breadcrumb crumb anchor crumb-separator"></div>

<div class= "btn-icon btn"></div>

<div class={concString}></div>

<div class="card-hover"></div>


<div class="chip"></div>

<div class="list"></div>
<div class=""></div>
<Accordion class="">
  <AccordionItem class=""/>
</Accordion>

<AppBar class=""/>
<AppRail class=""/>

<AppRailAnchor href="/" ></AppRailAnchor>
<AppRailTile/>
<AppRailAnchor/>
