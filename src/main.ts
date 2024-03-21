import './app.postcss';
import SkeletonUI from './SkeletonUI.svelte';
import DemoAccordion from './DemoAccordion.svelte';
import DemoTabGroup from './DemoTabGroup.svelte';
import DemoSlideToggle from './DemoSlideToggle.svelte';
import SkeletonSafelist from './SkeletonSafelist.svelte';

import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
import { storePopup, setInitialClassState } from '@skeletonlabs/skeleton';

setInitialClassState()
storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

export {SkeletonSafelist, SkeletonUI, DemoAccordion, DemoTabGroup, DemoSlideToggle};
