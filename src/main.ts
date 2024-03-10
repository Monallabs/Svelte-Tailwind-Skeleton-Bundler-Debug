import './app.postcss';
import SkeletonUI from './SkeletonUI.svelte';


import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
import { storePopup, setInitialClassState } from '@skeletonlabs/skeleton';

setInitialClassState()
storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

export {SkeletonUI};
