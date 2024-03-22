import './app.postcss';
import SkeletonUI from './SkeletonUI.svelte';
import DemoAccordion from './DemoAccordion.svelte';
import DemoTabGroup from './DemoTabGroup.svelte';
import DemoSlideToggle from './DemoSlideToggle.svelte';
import DemoListBox from './DemoListBox.svelte';
import SkeletonSafelist from './SkeletonSafelist.svelte';
import SampleMeltUi from './SampleMeltUi.svelte';
import DemoAvatar from './meltui/DemoAvatar.svelte';
import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
import { storePopup, setInitialClassState } from '@skeletonlabs/skeleton';

setInitialClassState()
storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

export {SampleMeltUi, SkeletonSafelist, SkeletonUI, DemoAccordion, DemoTabGroup, DemoSlideToggle, DemoAvatar, DemoListBox};
