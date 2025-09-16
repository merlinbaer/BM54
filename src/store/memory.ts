// app/overlayStore.ts
import { OverlayState } from '@/type/types';
import { observable } from '@legendapp/state';

// Globaler Overlay-State
export const overlayStore$ = observable<OverlayState>({
  visible: true, // Start sichtbar
});
